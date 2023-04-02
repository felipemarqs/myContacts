import { Container } from "./styles";

import xCircle from "../../../assets/icons/xCircle.svg";
import checkCircle from "../../../assets/icons/checkCircle.svg";

const ToastMessage = ({ text, type = "default" }) => {
  return (
    <Container type={type}>
      {type === "success" && <img src={checkCircle} />}
      {type === "error" && <img src={xCircle} />}
      <strong>{text}</strong>
    </Container>
  );
};

export default ToastMessage;
