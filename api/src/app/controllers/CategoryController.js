const CategoryRepository = require("../repositories/CategoriesRepositories");
const isValidUUID = require("../utils/isValidUUID");

class CategoryController {
  //Método para mostrar todas as categorias
  async index(req, res) {
    const categories = await CategoryRepository.findAll(); 
    res.json(categories);
  }

  //Método para criar uma categoria
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(404).json({ error: "Name is required!" });
    }

    const category = await CategoryRepository.create({ name });
    res.json(category);
  }

  //Método para pegar uma categoria
  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found!" });
    }
    res.json(category);
  }

  //Método para atualizar uma categoria
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

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

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: "Invalid cate;gory ID" });
    }

    await CategoryRepository.delete(id);

    //204: No content
    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
