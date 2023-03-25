import { useEffect, useState, useMemo } from "react";

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
} from "./styles";

//import { delay } from '../../utils/delay';
//Icons
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
//import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

// Services
import ContactsService from "../../services/ContactsService";

const Home = () => {
  //States
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ),
    [searchTerm, contacts]
  );

  //Effects
  useEffect(() => {
    const loadContacts = async () => {
      try {
        setIsLoading(true);

        const listContacts = await ContactsService.listContacts(orderBy);

        setContacts(listContacts);
      } catch (error) {
        console.log("Catch: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContacts();
  }, [orderBy]);

  //Functions
  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
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

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? " contato" : " contatos"}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

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
    </Container>
  );
};

export default Home;
