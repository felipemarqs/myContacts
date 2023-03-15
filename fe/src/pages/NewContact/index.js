import PageHeader from "../../components/PageHeader"
import Input from "../../components/Input/input"
import Select from "../../components/Select/Select"
import Button from '../../components/Button/Button'

const NewContact = () => {
    return (
        <>
            <PageHeader title="Novo Contato" subtitle="Crie um novo contato" />
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Email" />
            <Input type="text" placeholder="Telefone" />

            <Select >
                <option disabled selected>Categoria</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
                <option value="123">Instagram</option>
            </Select>

            <Button type="button">
                Salvar Contato
            </Button>
            <Button type="button" disabled>
                Salvar Contato
            </Button>
        </>
    )
}


export default NewContact