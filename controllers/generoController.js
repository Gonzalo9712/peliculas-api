const Genero = require("../models/Genero");

// Obtener todos los géneros
exports.obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear género
exports.crearGenero = async (req, res) => {
    try {
        const genero = new Genero(req.body);
        const nuevoGenero = await genero.save();
        res.status(201).json(nuevoGenero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar género
exports.actualizarGenero = async (req, res) => {
    try {
        const genero = await Genero.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(genero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar género
exports.eliminarGenero = async (req, res) => {
    try {
        await Genero.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Genero eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};