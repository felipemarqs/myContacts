import { Container, ListHeader, Card } from "./styles";

//Components
import Loader from "../../components/Loader";
import InputSearch from "./components/InputSearch";
import ErrorStatus from "./components/ErrorStatus";
import Header from "./components/Header";
import EmptyList from "./components/EmptyList";
import Modal from "../../components/Modal";
import SearchNotFound from "./components/SearchNotFound";
import ContactList from "./components/ContactsList";

//Hooks
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

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchTermEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && (
        <ErrorStatus
          errorMessage={errorMessage}
          handleTryAgain={handleTryAgain}
        />
      )}

      {isListEmpty && <EmptyList />}

      {isSearchTermEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            handleToggleOrderBy={handleToggleOrderBy}
            handleDeleteContact={handleDeleteContact}
          />

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
        </>
      )}
    </Container>
  );
};

export default Home;
