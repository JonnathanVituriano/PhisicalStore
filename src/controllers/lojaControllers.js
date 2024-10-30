const loja = require('../models/lojaModels.js');
const { buscarEndereco } = require ('../services/viacepService.js');
const { buscarCoordenadas } = require('../services/opencageService.js');
const { calcularDistancia } = require('../services/distanciaService.js');

exports.buscaLojasProximas = async (req, res) => {
    const cep = req.params.cep;

    try {
        const enderecoUsuario = await buscarEndereco(cep);
        if (!enderecoUsuario || enderecoUsuario.erro) {
            return res.status(404).json({message: 'CEP invalido ou não encontrado'});   
        }

        const coordenadasUsuario = await buscarCoordenadas(cep);
        const lojas = await loja.find();

        const lojasProximas = lojas.filter(loja => {
            const distancia = calcularDistancia(coordenadasUsuario.lat, coordenadasUsuario.lng, loja.coordenadas.lat, loja.coordenadas.lng);
            return distancia <= 100;
        });

        if (lojasProximas.length === 0) {
            return res.status(404).json({ message: 'Nenhuma loja encontrada em um raio de 100km'});
        }

        lojasProximas.sort((a, b) => calcularDistancia(coordenadasUsuario.lat, coordenadasUsuario.lng, a.coordenadas.lat, a.coordenadas.lng) - calcularDistancia(coordenadasUsuario.lat, coordenadasUsuario.lng, b.coordenadas.lat, b.coordenadas.lng));
        
        res.json(lojasProximas);
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor' });
    }
};