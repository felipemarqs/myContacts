import ReactDOM from "react-dom"
import Spinner from "../Spinner"

import { Overlay } from "./styles"
const Loader = ({ isLoading }) => {

    if (!isLoading) {
        return null
    }

    return ReactDOM.createPortal(
        <>
            <Overlay>
                <Spinner size={90} />
            </Overlay>
        </>
        , document.getElementById("loader-root"))


}

export default Loader