const { Router } = require("express");

const ContactController = require("./app/controllers/ContactController.js");

const router = Router();

router.get("/contacts", ContactController.index);
router.get("/contact/:id", ContactController.show);
router.delete("/contact/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

module.exports = router;
