import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsService from "../../services/ContactsService";
import toast from "../../services/utils/toast";

const NewContact = () => {
  const handleSubmit = async (formData) => {
    console.log("form data name", formData.name);

    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      toast("success", "Contato cadastrado!");

      await ContactsService.createContact(contact);
    } catch (error) {
      toast("error", "Ocorreu um erro ao cadastrar o contato!");
    }
  };

  return (
    <>
      <PageHeader title="Novo Contato" subtitle="Crie um novo contato" />

      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
};

export default NewContact;
