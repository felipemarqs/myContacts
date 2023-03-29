import Spinner from "../Spinner";
import { Container } from "./styles";

import Loader from '../Loader'

const FormGroup = ({ children, error, isLoading }) => {
  return (
    <Container>

      <Loader isLoading />
      <div className="form-item">
        {children}

        {isLoading && <Spinner />}
      </div>
      {error && <small>{error}</small>}

    </Container>
  );
};

export default FormGroup;
