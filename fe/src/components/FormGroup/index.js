
import Input from '../Input/input.js'

import { Container } from './styles'

const FormGroup = ({ children }) => {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default FormGroup