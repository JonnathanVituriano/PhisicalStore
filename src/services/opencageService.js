const axios = require ('axios');
const dotenv = require ('dotenv');
dotenv.config({ path: '../mongoUri.env'});

async function buscarCoordenadas(cep) {

    try{

        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
            params: {
                q: cep,
                key: process.env.OPENCAGE_API_KEY,
                countrycode: 'BR',
                limit: 1
            }
        });

        if (response.data.results.length === 0) {
            throw new Error('Nenhuma coordenada encontrada para o CEP.');
        }

        const { lat, lng } = response.data.results[0].geometry;
        return { lat, lng };
    } catch (error) {
        console.error('Erro ao buscar coordenadas: ', error);
        throw error;
    }
}

module.exports = { buscarCoordenadas };