const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Felipe",
    email: "felipe@mail.com",
    phone: "1223344",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "João",
    email: "joao@mail.com",
    phone: "1223344",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Maria",
    email: "maria@mail.com",
    phone: "1223344",
    category_id: v4(),
  },
];

class ContactRepositories {
  findAll() {
    return new Promise((resolve, rejected) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, rejected) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve, rejected) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  findByEmail(email) {
    return new Promise((resolve, rejected) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact)
    });
  }
}

module.exports = new ContactRepositories();
