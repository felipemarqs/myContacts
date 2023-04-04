import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast";

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

      await ContactsService.createContact(contact);
      toast(
        {
          type: "default",
          text: "Contato cadastrado!",
          duration: 20000
        });
    } catch (error) {
      toast(
        {
          type: "error",
          text: "Ocorreu um erro ao cadastrar o usuário"
        }
      );
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
