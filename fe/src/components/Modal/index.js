import Button from "../Button/Button";
import { Overlay, Container, Footer } from "./styles";

const Modal = ({ danger }) => {
    return (
        <>
            <Overlay>
                <Container danger={danger}>
                    <h1> Título do Modal</h1>
                    <p>
                        Corpo do Modal
                    </p>
                    <Footer>
                        <button type="button" className="cancelButton">Cancelar</button>
                        <Button type="button" danger={danger}> Deletar </Button>
                    </Footer>
                </Container>
            </Overlay>
        </>
    )
}

export default Modal;