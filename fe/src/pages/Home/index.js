import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
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
import emptyBox from "../../assets/icons/emptyBox.svg";
import magnifierQuestion from "../../assets/icons/magnifierQuestion.svg";

//React Router
import { Link } from "react-router-dom";
import useHome from "./useHome";

const Home = () => {
  const {
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    isLoadingDelete,
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    contacts,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
    errorMessage,
    handleTryAgain,
  } = useHome();

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

      {contacts.length > 0 && (
        <>
          <InputSearchContainer>
            <input
              type="text"
              value={searchTerm}
              onChange={handleChangeSearchTerm}
              placeholder="Pesquisar contato..."
            />
          </InputSearchContainer>
        </>
      )}

      <Header
        justifyContent={
          hasError
            ? "flex-end"
            : contacts.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && contacts.length > 0 && (
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
          {contacts < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão{" "}
                <strong>"Novo Contato"</strong> acima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Icon" />
              <p>
                Nenhum resultado foi encontrado para{" "}
                <strong>{searchTerm}</strong>
              </p>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Sort" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>

                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={editIcon} alt="Edit" />
                </Link>
                <button onClick={() => handleDeleteContact(contact)}>
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
