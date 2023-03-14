import { Container, InputSearchContainer } from "./styles"

import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <Container>
            <img src={logo} />
            <InputSearchContainer>
                <input type='text' placeholder="Pesquisar contato..." />
            </InputSearchContainer>
        </Container>)
}

export default Header