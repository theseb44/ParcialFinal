const { default: mongoose } = require("mongoose");
const {Schema} = require("mongoose")


const personaSchema = new mongoose.Schema({

   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cel: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("personas",personaSchema);