const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    sinopsis: {
        type: String
    },

    url: {
        type: String
    },

    imagen: {
        type: String
    },

    anioEstreno: {
        type: Number
    },

    genero: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genero"
    },

    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director"
    },

    productora: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Productora"
    },

    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tipo"
    },

    estado: {
        type: String,
        enum: ["Activo", "Inactivo"],
        default: "Activo"
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Media", MediaSchema);