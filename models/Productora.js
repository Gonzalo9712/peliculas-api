const mongoose = require("mongoose");

const ProductoraSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        enum: ["Activo", "Inactivo"],
        default: "Activo"
    },

    slogan: {
        type: String
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

module.exports = mongoose.model("Productora", ProductoraSchema);