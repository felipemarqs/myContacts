import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import { useEffect, useRef, useState } from "react";
import ContactsService from "../../services/ContactsService";
import { useParams, useHistory } from "react-router-dom";
import Loader from "../../components/Loader";
import toast from "../../utils/toast";
import useIsMounted from "../../hooks/useIsMounted";
const EditContact = () => {
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
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? "Carregando..." : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditContact;
