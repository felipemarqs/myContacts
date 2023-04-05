import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient("http://localhost:3001");
  }

  listContacts(orderBy = "asc") {
    return this.HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  createContact(contact) {
    return this.HttpClient.post("/contacts", {
      body: contact
    });
  }

  getContactById(contactId) {
    return this.HttpClient.get(`/contacts/${contactId}`)
  }

  updateContact(id, contact) {
    return this.HttpClient.put(`/contacts/${id}`, {
      body: contact
    })
  }

  deleteContact(id) {
    return this.HttpClient.delete(`/contacts/${id}`)
  }
}

export default new ContactsService();
