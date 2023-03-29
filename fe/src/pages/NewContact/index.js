import PageHeader from "../../components/PageHeader"
import ContactForm from "../../components/ContactForm"
import ContactsService from "../../services/ContactsService"

const NewContact = () => {

    const handleSubmit = async (formData) => {
        const contact = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            category_id: formData.categoryId
        }

        console.log(contact)

        //const response = await ContactsService.createContact(contact)
    }

    return (
        <>
            <PageHeader
                title="Novo Contato"
                subtitle="Crie um novo contato"
            />

            <ContactForm
                buttonLabel="Cadastrar"
                onSubmit={handleSubmit}
            />
        </>
    )
}


export default NewContact