const mongoose = require("mongoose");

const GeneroSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        enum: ["Activo", "Inactivo"],
        default: "Activo"
    },

    descripcion: {
        type: String
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Genero", GeneroSchema);