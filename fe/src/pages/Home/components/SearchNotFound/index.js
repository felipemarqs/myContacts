//Icons
import magnifierQuestion from "../../../../assets/icons/magnifierQuestion.svg";

//Styled
import { Container } from "./styles";

const SearchNotFound = ({ searchTerm }) => {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Icon" />
      <p>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>
      </p>
    </Container>
  );
};

export default SearchNotFound;
