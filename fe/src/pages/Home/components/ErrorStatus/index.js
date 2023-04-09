import { Container } from "./styles"
import sad from "../../../../assets/icons/sad.svg"
import Button from "../../../../components/Button"


const ErrorStatus = ({errorMessage, handleTryAgain}) => {
    return (
        <Container>
        <img src={sad} alt="Sad Icon" />
        <div className="details">
          <strong>Ocorreu um erro a obter os seus contatos</strong>
          <small>{errorMessage}</small>
          <Button onClick={handleTryAgain}>Tentar Novamente</Button>
        </div>
      </Container>
    )
}

export default ErrorStatus