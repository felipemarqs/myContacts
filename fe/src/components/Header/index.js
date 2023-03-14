import { Container } from "./styles";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={logo} />
    </Container>
  );
};

export default Header;
