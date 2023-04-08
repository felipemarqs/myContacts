//React
import { useRef } from "react";

//Services
import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";


const useNewContact = () => {
  const contactFormRef = useRef(null);

  const handleSubmit = async (contact) => {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFieldValues();
      toast({
        type: "success",
        text: "Contato cadastrado!",
      });
    } catch (error) {
      toast({
        type: "error",
        text: "Ocorreu um erro ao cadastrar o usuário",
      });
    }
  };

  return {
    handleSubmit,
    contactFormRef
  }
};

export default useNewContact;
