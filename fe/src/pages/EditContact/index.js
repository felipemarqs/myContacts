import PageHeader from "../../components/PageHeader"
import ContactForm from "../../components/ContactForm"
import { useEffect, useState } from "react"
import ContactsService from "../../services/ContactsService"
import { useParams, useHistory } from "react-router-dom"
import Loader
    from "../../components/Loader"
import toast from "../../utils/toast"
const EditContact = () => {
    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        const loadContact = async () => {

            try {
                const contactData = await ContactsService.getContactById(id)
                setIsLoading(false)
                console.log(contactData)


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


    const handleSubmit = (formData) => {
        //
    }
    return (
        <>

            <Loader isLoading={isLoading} />
            <PageHeader title="Edite o contato" />
            <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
        </>
    )
}


export default EditContact