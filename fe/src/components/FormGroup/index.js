import { Container } from "./styles";

const FormGroup = ({ children, error }) => {
  return (
    <>
      <Container>
        {children}
        {error && <small>{error}</small>}
      </Container>
    </>
  );
};

export default FormGroup;
