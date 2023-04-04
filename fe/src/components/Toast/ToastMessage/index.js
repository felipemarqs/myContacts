import { Container } from "./styles";

import xCircle from "../../../assets/icons/xCircle.svg";
import checkCircle from "../../../assets/icons/checkCircle.svg";
import { useEffect } from "react";

const ToastMessage = ({ text, type = "default", onRemoveMessage, id, duration }) => {

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      onRemoveMessage(id)
    }, duration)

    return () => {
      clearTimeout(timeoutId);
    }

  }, [id, onRemoveMessage])

  const handleRemoveToast = () => {
    onRemoveMessage(id);
  }
  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0} role="button"
    >
      {type === "success" && <img src={checkCircle} />}
      {type === "error" && <img src={xCircle} />}
      <strong>{text}</strong>
    </Container>
  );
};

export default ToastMessage;
