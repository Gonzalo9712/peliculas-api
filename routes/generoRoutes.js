const express = require("express");
const router = express.Router();

const generoController = require("../controllers/generoController");

router.get("/", generoController.obtenerGeneros);
router.post("/", generoController.crearGenero);
router.put("/:id", generoController.actualizarGenero);
router.delete("/:id", generoController.eliminarGenero);

module.exports = router;