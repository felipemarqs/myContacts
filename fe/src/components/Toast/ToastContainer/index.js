import { useState } from "react";
import { Container } from "./styles"
//Component

import ToastMessage from "../ToastMessage"




const TotastContainer = () => {
    const [messages, setMessages] = useState([
        {id: Math.random(), type: "default", text: 'Default text'},
        {id: Math.random(), type: "error", text: 'Error text'},
        {id: Math.random(), type: "success", text: 'Sucess text'},
    ]);

    return (
        <Container>
            {messages.map(({id,text,type})=> (
                <ToastMessage key={id} text={text} type={type}/>
            ))}
        </Container>
        
    )
}

export default TotastContainer