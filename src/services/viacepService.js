const axios = require ('axios');
const dotenv = require ('dotenv');
dotenv.config();

async function buscarEndereco(cep) {
    try {
        const response = await axios.get (`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) throw new Error('CEP invalido');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar o endereço: ', error);
        throw error;
    }
}

module.exports = { buscarEndereco };