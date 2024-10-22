const mongoose =  require('mongoose');

function conectarMongoDB() {
    mongoose.conect('URL AQUI!!', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conectando ao MongoDB'))
    .catch(err => console.log('Erro ao conectar ao MongoDB', err));

}

module.exports = conectarMongoDB;