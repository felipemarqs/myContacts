import Spinner from "../Spinner";
import { StyledButton } from "./styles";

const Button = ({ type, disabled, isLoading, children, onClick }) => {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
};

export default Button;
