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
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const Home = () => {
  return (

    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Sort" />
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
            <Link to="/edit/123">
              <img src={editIcon} alt="Edit" />
            </Link>
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
