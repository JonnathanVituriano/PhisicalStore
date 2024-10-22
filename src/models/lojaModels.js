const mongoose = require ('mongoose');

const lojaSchema = new mongoose.Schema({
    nome: String,
    endereco: {
        cep: String,
        rua: String,
        numero: String,
        cidade: String,
        estado: String,
    },
    coordenadas: {
        lat: Number,
        lng: Number,
    }
});

module.exports = mongoose.model('Loja', lojaSchema);