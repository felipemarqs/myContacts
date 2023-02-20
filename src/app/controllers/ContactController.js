const ContactsRepository = require("../repositories/ContactRepositories");

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    //Get one

    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Error not found" });
    }

    res.json(contact);
  }

  store(req, res) {
    //Create new
    res.send(req.body)
  }

  update() {
    //Edit
  }

  async delete(req, res) {
    //Delete

    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "Error not found" });
    }

    await ContactsRepository.delete(id);

    //204: No content
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
