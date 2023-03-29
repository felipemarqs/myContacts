import Spinner from "../Spinner";
import { Container } from "./styles";

const FormGroup = ({ children, error, isLoading }) => {
  return (
    <Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
