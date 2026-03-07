const mongoose = require("mongoose");

const TipoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String
    },

    estado: {
        type: String,
        enum: ["Activo", "Inactivo"],
        default: "Activo"
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

module.exports = mongoose.model("Tipo", TipoSchema);