import { useEffect, useRef, useState } from "react";
import Button from "../Button/index";
import ReactPortal from "../ReactPortal";
import { Overlay, Container, Footer } from "./styles";


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

    const [shouldRender, setShouldRender] = useState(visible)

    const overlayRef = useRef(null)

    useEffect(() => {
        if (visible) {
            setShouldRender(true)
        }

        console.log(overlayRef.current)


        if (!visible && overlayRef.current) {
            /*    console.log("--------233121")
               overlayRef.current.addEventListener('animationend', () => {
                   
               }
               ); */
            setShouldRender(false)

        }


    }, [visible])

    if (!shouldRender) {
        return null
    }



    return (
        <ReactPortal containerId={'modal-root'}>
            <Overlay isleaving={!visible} ref={overlayRef}>
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