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

        let lojasProximas = lojas.filter(loja => {
            const distancia = calcularDistancia(coordenadasUsuario.lat, coordenadasUsuario.lng, loja.coordenadas.lat, loja.coordenadas.lng);
            return distancia <= 100;
        });

        lojasProximas = lojasProximas.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.endereco.cep === value.endereco.cep && t.nome === value.nome
        ))
    );

        if (lojasProximas.length === 0) {
            return res.status(404).json({ message: 'Nenhuma loja encontrada em um raio de 100km'});
        }

        const resultado = lojasProximas.map((loja, index) => ({
            [`cep_loja_${index + 1}`]: loja.endereco.cep,
            [`nome_loja_${index + 1}`]: loja.nome,
            [`rua_loja_${index + 1}`]: loja.endereco.rua,
            [`numero_loja_${index + 1}`]: loja.endereco.numero,
            [`cidade_loja_${index + 1}`]: loja.endereco.cidade,
            [`estado_loja_${index + 1}`]: loja.endereco.estado
        }));

        res.json({ message: 'O CEP mencionado tem essas lojas em um raio de 100km:', lojas: resultado });

    } catch (error) {
        res.status(500).json({message: 'Erro no servidor' });
    }
};