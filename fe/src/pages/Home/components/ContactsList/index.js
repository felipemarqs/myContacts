//Icons
import editIcon from "../../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../../assets/icons/deleteIcon.svg";
import arrow from "../../../../assets/icons/arrow.svg";

//Components

import { ListHeader, Card } from "./styles";

//React Router
import { Link } from "react-router-dom";

const ContactList = ({
  filteredContacts,
  orderBy,
  handleToggleOrderBy,
  handleDeleteContact,
}) => {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Sort" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={editIcon} alt="Edit" />
            </Link>
            <button onClick={() => handleDeleteContact(contact)}>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

      
    </>
  );
};

export default ContactList;
