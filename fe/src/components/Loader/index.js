import Spinner from "../Spinner"
import ReactPortal from "../ReactPortal"
import useAnimatedUnmouted from "../../hooks/useAnimatedUnmouted";


import { Overlay } from "./styles"
const Loader = ({ isLoading }) => {

    const { shouldRender, animatedElementRef } = useAnimatedUnmouted(isLoading)

    if (!shouldRender) {
        return null
    }


    return (
        <ReactPortal containerId='loader-root'>
            <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
                <Spinner size={90} />
            </Overlay>
        </ReactPortal>
    )


}

export default Loader