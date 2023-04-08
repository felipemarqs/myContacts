//Components
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

//Hooks
import useNewContact from "./useNewContact";

const NewContact = () => {
  const { contactFormRef, handleSubmit } = useNewContact();

  return (
    <>
      <PageHeader title="Novo Contato" subtitle="Crie um novo contato" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default NewContact;
