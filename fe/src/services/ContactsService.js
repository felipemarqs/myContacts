import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy = "asc") {
    return this.HttpClient.get(
      `/contacts/37ff40af-0ccf-4ccc-9e33-2583df606cf2?orderBy=${orderBy}`
    );
  }
}

export default new ContactsService();
