const CategoryRepository = require('../repositories/CategoriesRepositories')

class CategoryController {
    async index(req,res) {
        const categories = await CategoryRepository.findAll()
        res.json(categories)
    }

    async store(req,res) {
       const {name} = req.body

       if (!name ) {
        return res.status(404).json({ error: "Name is required!" });
      }


       const category = await CategoryRepository.create({name})
       res.json(category)
    }


    async show(req, res) {
        const { id } = req.params;
        const category = await CategoryRepository.findById(id)
        res.json(category)
    }
}


module.exports = new CategoryController();