import PageHeader from "../../components/PageHeader"
import ContactForm from "../../components/ContactForm"

const NewContact = () => {
    return (
        <>
            <PageHeader title="Novo Contato" subtitle="Crie um novo contato" />
            <ContactForm buttonLabel="Cadastrar" />
        </>
    )
}


export default NewContact