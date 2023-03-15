import Button from "../Button/Button";
import { Overlay, Container, Footer } from "./styles";
import ReactDOM from "react-dom";

const Modal = ({ danger }) => {

    return ReactDOM.createPortal(
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
        </>, document.getElementById("modal-root")
    )
}

export default Modal;