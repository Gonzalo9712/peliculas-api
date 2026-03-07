const Productora = require("../models/Productora");

// Obtener todas las productoras
exports.obtenerProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear productora
exports.crearProductora = async (req, res) => {
    try {
        const productora = new Productora(req.body);
        const nuevaProductora = await productora.save();
        res.status(201).json(nuevaProductora);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar productora
exports.actualizarProductora = async (req, res) => {
    try {
        const productora = await Productora.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(productora);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar productora
exports.eliminarProductora = async (req, res) => {
    try {
        await Productora.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Productora eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};