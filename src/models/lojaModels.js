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

//insertion test
const Loja  = mongoose.model('Loja', lojaSchema);

const novaLoja = new Loja({
    nome: "Loja Exemplo",
    endereco: {
        cep: "12345678",
        rua: "Rua Exemplo",
        numero: "123",
        cidade: "Cidade Exemplo",
        estado: "EX"
    },
    coordenadas: {
        lat: -23.5505,
        lng: -46.6333
    }
});

novaLoja.save()
    .then(() => console.log("Loja salva com sucesso!"))
    .catch((err) => console.log("Erro ao salvar loja:", err));

module.exports = Loja