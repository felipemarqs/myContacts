//React
import { useState } from "react";

//Components
import FormGroup from "../FormGroup";
import Input from "../Input/input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { Form, ButtonContainer } from "./styles";

//Utils
import isEmailValid from "../../utils/isEmailValid";

const ContactForm = ({ buttonLabel }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name, email, phone, category
        })
    }

    const handleNameChange = (event) => {
        setName(event.target.value)

        if (!event.target.value) {
            setErrors((prevState) => [
                ...prevState,
                { field: "name", message: "Nome é obrigatório!" }
            ])
        } else {
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== "name"
            ))
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)

        if (event.target.value && !isEmailValid(event.target.value)) {
            const errorAlreadyExists = errors.find((error) => error.field === 'email')

            if (errorAlreadyExists) {
                return;
            }
            setErrors((prevState) => [
                ...prevState,
                { field: "email", message: "Email inválido!" }
            ])
        } else {
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== "email"
            ))

        }
    }

    console.log(errors)
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                    value={name}
                    placeholder="Nome"
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error="O formato do E-mail é inválido!">
                <Input
                    value={email}
                    placeholder="Email"
                    error
                    onChange={handleEmailChange}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    value={phone}
                    placeholder="Telefone"
                    onChange={(event) => setPhone(event.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >

                    <option value="">Categoria</option>
                    <option value="Instagram">Instagram</option>
                    <option value="discord">Discord</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
};
export default ContactForm;
