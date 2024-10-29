const loja = require('../models/lojaModels');
const { buscaEndereco } = require ('../services/viacepService');
const { calcularDistancia } = require('../services/distanciaService');

exports.buscaLojasProximas = async (req, res) => {
    const cep = req.params.cep;

    try {
        const enderecoUsuario = await buscaEndereco(cep);
        if (!enderecoUsuario || enderecoUsuario.erro) {
            return res.status(404).json({message: 'CEP invalido ou não encontrado'});   
        }

        const lojas = await loja.find();
        const lojasProximas = lojas.filter(loja => {
            const distancia = calcularDistancia(enderecoUsuario.lat, enderecoUsuario.lng, loja.coordenadas.lat, loja.coordenadas.lng);
            return distancia <= 100;
        });

        if (lojasProximas.length === 0) {
            return res.status(404).json({ message: 'Nenhuma loja encontrada em um raio de 100km'});
        }

        lojasProximas.sort((a, b) => calcularDistancia(enderecoUsuario.lat, enderecoUsuario.lng, a.coordenadas.lat, a.coordenadas.lng) - calcularDistancia(enderecoUsuario.lat, enderecoUsuario.lng, b.coordenadas.lat, b.coordenadas.lat, b.coordenadas.lng));
        
        res.json(lojasProximas);
    } catch (error) {
        res.status(500).json({message: 'Erro no servidor' });
    }
};