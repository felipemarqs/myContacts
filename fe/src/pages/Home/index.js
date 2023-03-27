import { useEffect, useState, useMemo, useCallback } from "react";

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
} from "./styles";

//Components
import Button from "../../components/Button/Button";
//import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

//Icons
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import arrow from "../../assets/icons/arrow.svg";
import sad from "../../assets/icons/sad.svg";

//React Router
import { Link } from "react-router-dom";

// Services
import ContactsService from "../../services/ContactsService";

const Home = () => {
  //States
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ),
    [searchTerm, contacts]
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const listContacts = await ContactsService.listContacts(orderBy);

      setContacts(listContacts);
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  //Effects
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  //Functions
  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };
  return (
    <Container>
      {/*  <Modal danger /> */}
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Pesquisar contato..."
        />
      </InputSearchContainer>

      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? " contato" : " contatos"}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad Icon" />
          <div className="details">
            <strong>Ocorreu um erro a obter os seus contatos</strong>
            <small>{errorMessage}</small>
            <Button onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Sort" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map(({ id, name, email, phone, category_name }) => (
            <Card key={id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{name}</strong>
                  {category_name && <small>{category_name}</small>}
                </div>

                <span>{email}</span>
                <span>{phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${id}`}>
                  <img src={editIcon} alt="Edit" />
                </Link>
                <button>
                  <img src={deleteIcon} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
