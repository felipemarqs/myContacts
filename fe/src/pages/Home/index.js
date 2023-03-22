import { useEffect, useState } from 'react';

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
} from "./styles";

//Icons
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import arrow from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
/* import Modal from "../../components/Modal";
import Loader from "../../components/Loader"; */

const Home = () => {

  //States
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')

  //Effects
  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])

  //Functions
  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }


  return (
    <Container>
      {/*  <Modal danger /> */}
      {/* <Loader /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>{contacts.length}
          {contacts.length > 1 ? ' contatos' : 'contato'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Sort" />
        </button>
      </ListHeader>

      {contacts.map(({ id, name, email, phone, category_name }) => (

        <Card key={id}>
          <div className="info">
            <div className="contact-name">
              <strong>{name}</strong>
              {category_name && <small>{category_name}</small>}
            </div>

            <span>{email}</span>
            <span>{phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${id}`}>
              <img src={editIcon} alt="Edit" />
            </Link>
            <button>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </Card>

      ))

      }

    </Container>
  );
};



export default Home;
