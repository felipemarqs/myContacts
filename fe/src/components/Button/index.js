import Spinner from "../Spinner";
import { StyledButton } from "./styles";

const Button = ({ type, disabled, isLoading, children, onClick, danger }) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      danger={danger}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
};

export default Button;
