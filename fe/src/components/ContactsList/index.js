import { Container, Header, ListContainer, ListBody } from "./styles"

import arrow from '../../assets/icons/arrow.svg'
const ContactsList = () => {
    return (
        <Container>
            <Header>

                <strong>3 Contatos</strong>
                <a href="#">Novo Contato</a>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} />
                    </button>
                </header>
                <ListBody>

                </ListBody>
            </ListContainer>
        </Container>
    )
}

export default ContactsList