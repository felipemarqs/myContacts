//React
import { useEffect, useRef, useState } from "react";

//Services
import ContactsService from "../../services/ContactsService";

//React Router Dom
import { useParams, useHistory } from "react-router-dom";

//Toast
import toast from "../../utils/toast";

//Custom Hooks
import useIsMounted from "../../hooks/useIsMounted";

const useEditContact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState("");

  const contactFormRef = useRef(null);

  const history = useHistory();

  const { id } = useParams();

  const isMounted = useIsMounted();

  useEffect(() => {
    const loadContact = async () => {
      try {
        console.log(isMounted());
        if (isMounted()) {
          const contact = await ContactsService.getContactById(id);
          contactFormRef.current.setFieldsValues(contact);
          setContactName(contact.name);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted()) {
          history.push("/");
          toast({
            type: "error",
            text: "Contato não encontrado",
          });
        }
        //HandleErros
      }
    };
    loadContact();
  }, [id, history, isMounted]);

  const handleSubmit = async (contact) => {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact);

      setContactName(updatedContact.name);
      toast({
        type: "success",
        text: "Contato editado!",
        duration: 20000,
      });
    } catch (error) {
      toast({
        type: "error",
        text: "Ocorreu um erro ao aditar o contato!",
      });
    }
  };

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
};

export default useEditContact;
