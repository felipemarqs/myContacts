import { useEffect, useState, useMemo, useCallback } from "react";

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer
} from "./styles";

//Components
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

//Icons
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import arrow from "../../assets/icons/arrow.svg";
import sad from "../../assets/icons/sad.svg";
import emptyBox from '../../assets/icons/emptyBox.svg'
import magnifierQuestion from '../../assets/icons/magnifierQuestion.svg'

//React Router
import { Link } from "react-router-dom";

// Services
import ContactsService from "../../services/ContactsService";

//Utils
import toast from '../../utils/toast'

const Home = () => {
  //States
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

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
      //setContacts([])
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
      console.log(error)
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

  const handleDeleteContact = ({ id, name, email, phone, category_name }) => {
    setIsDeleteModalVisible(true)
    setContactBeingDeleted({ id, name, email, phone, category_name })
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false)
    setContactBeingDeleted(null)
  }

  const handleConfirmDeleteContact = async () => {
    try {
      setIsLoadingDelete(true)
      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeingDeleted.id
      ))

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!'
      })

      handleCloseDeleteModal();


    } catch (error) {
      toast({
        type: 'error',
        text: 'Ocorreu um erro ao deletar o contato!'
      })
    } finally {
      setIsLoadingDelete(false)
    }
  }
  return (
    <Container>
      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover "${contactBeingDeleted?.name}"? `}
        confirmLabel={"Deletar"}
        cancelLabel={"Cancelar"}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        isLoading={isLoadingDelete}
      >
        <p>Essa ação não pode ser desfeita!</p>
      </Modal>
      <Loader isLoading={isLoading} />



      {contacts.length > 0 &&
        <>
          <InputSearchContainer>
            <input
              type="text"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              placeholder="Pesquisar contato..."
            />
          </InputSearchContainer>
        </>}

      <Header justifyContent={
        hasError
          ? 'flex-end'
          : (contacts.length > 0 ? 'space-between' : 'center')
      }
      >
        {(!hasError && contacts.length > 0) && (
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

          {(contacts < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />
              <p>Você ainda não tem nenhum contato cadastrado! Clique no botão <strong>"Novo Contato"</strong> acima para cadastrar o seu primeiro!</p>
            </EmptyListContainer>
          )}

          {
            (contacts.length > 0 && filteredContacts.length < 1) &&
            (<SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Icon" />
              <p>Nenhum resultado foi encontrado para <strong>{searchTerm}</strong></p>
            </SearchNotFoundContainer>)
          }

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
                <button
                  onClick={() => handleDeleteContact({ id, name, email, phone, category_name })}

                >
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
