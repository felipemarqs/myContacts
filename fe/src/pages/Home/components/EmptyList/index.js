import emptyBox from "../../../../assets/icons/emptyBox.svg";

import { Container } from "./styles";

const EmptyList = () => {
  return (
    <Container>
      <img src={emptyBox} alt="Empty Box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão{" "}
        <strong>"Novo Contato"</strong> acima para cadastrar o seu primeiro!
      </p>
    </Container>
  );
};

export default EmptyList
