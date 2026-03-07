const Director = require("../models/Director");

// Obtener todos los directores
exports.obtenerDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.json(directores);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear director
exports.crearDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        const nuevoDirector = await director.save();
        res.status(201).json(nuevoDirector);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar director
exports.actualizarDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(director);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar director
exports.eliminarDirector = async (req, res) => {
    try {
        await Director.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Director eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};