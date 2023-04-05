import PageHeader from "../../components/PageHeader"
import ContactForm from "../../components/ContactForm"
import { useEffect, useRef, useState } from "react"
import ContactsService from "../../services/ContactsService"
import { useParams, useHistory } from "react-router-dom"
import Loader
    from "../../components/Loader"
import toast from "../../utils/toast"
const EditContact = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [contactName, setContactName] = useState('')

    const contactFormRef = useRef(null)

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        const loadContact = async () => {

            try {
                const contact = await ContactsService.getContactById(id)
                setContactName(contact.name)

                contactFormRef.current.setFieldsValues(contact)
                setIsLoading(false)
            } catch (error) {
                history.push('/')
                toast({
                    type: 'error',
                    text: 'Contato não encontrado'
                })
                //HandleErros
            }
        }
        loadContact();
    }, [])


    const handleSubmit = async (formData) => {
        console.log("form data name", formData);

        try {
            const contact = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                category_id: formData.categoryId,
            };

            const updatedContact = await ContactsService.updateContact(id, contact);

            setContactName(updatedContact.name)
            toast(
                {
                    type: "success",
                    text: "Contato editado!",
                    duration: 20000
                });
        } catch (error) {
            toast(
                {
                    type: "error",
                    text: "Ocorreu um erro ao aditar o contato!"
                }
            );
        }

    }
    return (
        <>

            <Loader isLoading={isLoading} />
            <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
            <ContactForm
                ref={contactFormRef}
                buttonLabel="Salvar alterações"
                onSubmit={handleSubmit}
            />
        </>
    )
}


export default EditContact