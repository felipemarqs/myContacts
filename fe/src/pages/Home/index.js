import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from "./styles";

//Icons
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import arrow from "../../assets/icons/arrow.svg";

const Home = () => {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <a href="#">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Marques</strong>
              <small>Instagram</small>
            </div>

            <span>felipe@felipe.com</span>
            <span>(71) 91222-2222</span>
          </div>

          <div className="actions">
            <a href="">
              <img src={editIcon} alt="Edit" />
            </a>
            <button>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Marques</strong>
              <small>Instagram</small>
            </div>

            <span>felipe@felipe.com</span>
            <span>(71) 91222-2222</span>
          </div>

          <div className="actions">
            <a href="">
              <img src={editIcon} alt="Edit" />
            </a>
            <button>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Marques</strong>
              <small>Instagram</small>
            </div>

            <span>felipe@felipe.com</span>
            <span>(71) 91222-2222</span>
          </div>

          <div className="actions">
            <a href="">
              <img src={editIcon} alt="Edit" />
            </a>
            <button>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
};

export default Home;
