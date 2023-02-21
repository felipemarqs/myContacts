const ContactsRepository = require("../repositories/ContactRepositories");

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();
    //teste
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

  async store(req, res) {
    //Create new
    const { name, email, phone, category_id } = req.body;

    if (!name || !email) {
      return res.status(404).json({ error: "Name and email is required!" });
    }

    const emailExists = await ContactsRepository.findByEmail(email);

    if (emailExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }

  async update(req, res) {
    //Edit

    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: "Error not found" });
    }

    
    if (!name) {
        return res.status(404).json({ error: "Name and email is required!" });
    }

    if (!email) {
        return res.status(404).json({ error: "Email and email is required!" });
    }



    
    const emailExists = await ContactsRepository.findByEmail(email);

    if (emailExists && emailExists.id !== id) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const contact = await ContactsRepository.update(id, {
        name, email, phone, category_id
    })

    res.json(contact);
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
