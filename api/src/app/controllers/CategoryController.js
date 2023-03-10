const CategoryRepository = require("../repositories/CategoriesRepositories");

class CategoryController {
  //Show all categories
  async index(req, res) {
    const categories = await CategoryRepository.findAll();
    res.json(categories);
  }

  //Create a category
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ error: "Name is required!" });
    }

    const category = await CategoryRepository.create({ name });
    res.json(category);
  }

  //Show a category
  async show(req, res) {
    const { id } = req.params;
    const category = await CategoryRepository.findById(id);
    res.json(category);
  }

  //Update a category
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return res.status(404).json({ error: "Category not found!" });
    }

    const category = await CategoryRepository.update(id, { name });

    res.json(category);
  }

  //Delete a category
  async delete(req, res) {
    const { id } = req.params;

    await CategoryRepository.delete(id);

    //204: No content
    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
