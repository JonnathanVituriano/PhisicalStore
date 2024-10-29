require('dotenv').config({path: './mongoUri.env'});
const mongoose =  require('mongoose');

function conectarMongoDB() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log('Erro ao conectar ao MongoDB', err));

}

module.exports = conectarMongoDB;