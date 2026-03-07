const Media = require("../models/Media");

// Obtener todas las medias
exports.obtenerMedia = async (req, res) => {
    try {

        const media = await Media.find()
        .populate("genero")
        .populate("director")
        .populate("productora")
        .populate("tipo");

        res.json(media);

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear media
exports.crearMedia = async (req, res) => {
    try {

        const media = new Media(req.body);
        const nuevaMedia = await media.save();

        res.status(201).json(nuevaMedia);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar media
exports.actualizarMedia = async (req, res) => {
    try {

        const media = await Media.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(media);

    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar media
exports.eliminarMedia = async (req, res) => {
    try {

        await Media.findByIdAndDelete(req.params.id);

        res.json({ mensaje: "Media eliminada correctamente" });

    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};