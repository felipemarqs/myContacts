import { useState, useEffect } from "react";
import { Container } from "./styles";
//Component

import ToastMessage from "../ToastMessage";

const TotastContainer = () => {
  const [messages, setMessages] = useState([
    //{id: Math.random(), type: "default", text: 'Default text'},
  ]);

  useEffect(() => {
    const handleAddToast = (event) => {
      const { type, text } = event.detail;
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    };
    document.addEventListener("addtoast", handleAddToast);

    
    return () => {
      document.removeEventListener("addtoast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map(({ id, text, type }) => (
        <ToastMessage key={id} text={text} type={type} />
      ))}
    </Container>
  );
};

export default TotastContainer;
