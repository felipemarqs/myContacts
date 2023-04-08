//React
import { useEffect, useState, useMemo, useCallback } from "react";

// Services
import ContactsService from "../../services/ContactsService";

//Utils
import toast from "../../utils/toast";

const useHome = () => {
  //States
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

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
      console.log("List contacts", listContacts);
      setContacts(listContacts);
      //setContacts([])
      setHasError(false);
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
      console.log(error);
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

  const handleDeleteContact = (contact) => {
    setIsDeleteModalVisible(true);
    setContactBeingDeleted(contact);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setContactBeingDeleted(null);
  };

  const handleConfirmDeleteContact = async () => {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
      );

      toast({
        type: "success",
        text: "Contato deletado com sucesso!",
      });

      handleCloseDeleteModal();
    } catch (error) {
      toast({
        type: "error",
        text: "Ocorreu um erro ao deletar o contato!",
      });
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return {
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    isLoadingDelete,
    isLoading,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    contacts,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
    errorMessage,
    handleTryAgain
  }
};

export default useHome;
