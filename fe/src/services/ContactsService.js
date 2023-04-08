import ContactMapper from "./mappers/ContactMapper";
import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy = "asc") {
    const contacts = await this.HttpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map(ContactMapper.toDomain);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);

    return this.HttpClient.post("/contacts", {
      body: body,
    });
  }

  async getContactById(contactId) {
    const contact = await this.HttpClient.get(`/contacts/${contactId}`);

    return ContactMapper.toDomain(contact);
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.HttpClient.put(`/contacts/${id}`, {
      body: body,
    });
  }

  deleteContact(id) {
    return this.HttpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
