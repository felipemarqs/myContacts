import ReactDOM from "react-dom"
import Spinner from "../Spinner"
import ReactPortal from "../ReactPortal"

import { Overlay } from "./styles"
const Loader = ({ isLoading }) => {

    if (!isLoading) {
        return null
    }


    return (
        <ReactPortal containerId='loader-root'>
            <Overlay>
                <Spinner size={90} />
            </Overlay>
        </ReactPortal>
    )


}

export default Loader