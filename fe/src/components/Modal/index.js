import Button from "../Button/Button";
import { Overlay, Container, Footer } from "./styles";

const Modal = () => {
    return (
        <>
            <Overlay>
                <Container>
                    <h1> Título do Modal</h1>
                    <p>
                        Corpo do Modal
                    </p>
                    <Footer>
                        <button type="button" className="cancelButton">Cancelar</button>
                        <Button type="button"> Deletar </Button>
                    </Footer>
                </Container>
            </Overlay>
        </>
    )
}

export default Modal;