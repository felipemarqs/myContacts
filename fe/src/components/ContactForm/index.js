import { useState } from "react"

import FormGroup from "../FormGroup"
import Input from "../Input/input"
import Select from "../Select/Select"
import Button from '../Button/Button'
import { Form, ButtonContainer } from "./styles"


const ContactForm = ({ buttonLabel }) => {

    const [name, setName] = useState('')

    return (
        <Form>
            <FormGroup>
                <Input
                    value={name}
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}

                />
            </FormGroup>
            <FormGroup
                error="O formato do E-mail é inválido!"
            >
                <Input placeholder="Email" error />
            </FormGroup>
            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>


            <FormGroup>
                <Select>
                    <option value="Instagram">INSTAGRAM</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>

        </Form>
    )
}
export default ContactForm