import { Container } from "./styles";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
};

export default Header;
