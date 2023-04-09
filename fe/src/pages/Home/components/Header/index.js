import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header = ({ hasError, qtyOfContacts, qtyOfFilteredContacts }) => {
  const alignment = hasError
    ? "flex-end"
    : qtyOfContacts > 0
    ? "space-between"
    : "center";
  return (
    <>
      <Container justifyContent={alignment}>
        {!hasError && qtyOfContacts > 0 && (
          <strong>
            {qtyOfFilteredContacts}
            {qtyOfFilteredContacts === 1 ? " contato" : " contatos"}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Container>
    </>
  );
};

export default Header;
