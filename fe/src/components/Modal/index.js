
import Button from "../Button/index";
import ReactPortal from "../ReactPortal";
import { Overlay, Container, Footer } from "./styles";
import useAnimatedUnmouted from "../../hooks/useAnimatedUnmouted";


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

    const { shouldRender, animatedElementRef } = useAnimatedUnmouted(visible)

    if (!shouldRender) {
        return null
    }



    return (
        <ReactPortal containerId={'modal-root'}>
            <Overlay isLeaving={!visible} ref={animatedElementRef}>
                <Container danger={danger} isleaving={!visible}>
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
        </ReactPortal>
    )
}

export default Modal;