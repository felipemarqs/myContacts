import { useEffect, useRef, useState } from "react"
const useAnimatedUnmouted = (visible) => {

    const [shouldRender, setShouldRender] = useState()

    const animatedElementRef = useRef(null)

    useEffect(() => {
        if (visible) {
            setShouldRender(true)
        }


        const handleAnimationEnd = () => {
            setShouldRender(false);
        }

        const elementRef = animatedElementRef.current;
        if (!visible && elementRef) {
            console.log("Caiu aqui")
            elementRef.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if (elementRef) {
                elementRef.removeEventListener('animationend', handleAnimationEnd)
            }
        }


    }, [visible])

    return { shouldRender, animatedElementRef }



}

export default useAnimatedUnmouted