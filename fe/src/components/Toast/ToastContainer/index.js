import { useState, useEffect, useCallback } from "react";
import { Container } from "./styles";
//Component

import ToastMessage from "../ToastMessage";

import { toastEventManager } from "../../../utils/toast";

const TotastContainer = () => {
  const [messages, setMessages] = useState([
    //{id: Math.random(), type: "default", text: 'Default text'},
  ]);

  useEffect(() => {
    const handleAddToast = ({ type, text, duration }) => {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    };
    toastEventManager.on("addtoast", handleAddToast);
    return () => {
      toastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id))
  }, [])

  return (
    <Container>
      {messages.map(({ id, text, type, duration = 5000 }) => (
        <ToastMessage
          duration={duration}
          key={id}
          id={id}
          text={text}
          type={type}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
};

export default TotastContainer;
