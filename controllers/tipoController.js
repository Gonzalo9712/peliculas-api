const Tipo = require("../models/Tipo");

// Obtener tipos
exports.obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear tipo
exports.crearTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        const nuevoTipo = await tipo.save();
        res.status(201).json(nuevoTipo);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar tipo
exports.actualizarTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(tipo);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar tipo
exports.eliminarTipo = async (req, res) => {
    try {
        await Tipo.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Tipo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};