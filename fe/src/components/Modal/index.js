import Button from "../Button/index";
import { Overlay, Container, Footer } from "./styles";
import ReactDOM from "react-dom";

const Modal = ({
    danger,
    title,
    children,
    cancelLabel = 'Cancelar',
    confirmLabel = 'Confirmar',
    onCancel,
    onConfirm,
    visible,
    isLoading
}) => {

    if (!visible) {
        return null
    }

    return ReactDOM.createPortal(
        <>
            <Overlay>
                <Container danger={danger}>
                    <h1> {title}</h1>
                    {children}
                    <Footer>
                        <button
                            type="button"
                            className="cancelButton"
                            onClick={onCancel}
                            disabled={isLoading}
                        >
                            {cancelLabel}
                        </button>
                        <Button
                            type="button"
                            danger={danger}
                            onClick={onConfirm}
                            isLoading={isLoading}
                        >
                            {confirmLabel}
                        </Button>
                    </Footer>
                </Container>
            </Overlay>
        </>, document.getElementById("modal-root")
    )
}

export default Modal;