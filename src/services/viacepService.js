const axios = require ('axios');

async function buscarEndereco(cep) {
    try {
        const response = await axios.get (`https://viacep.com.br/ws/${cep}/json/`);
        return responde.data;
    } catch (error) {
        console.error('Erro ao buscar o endereço: ', error);
        throw error;
    }
}

module.exports = { buscarEndereco };