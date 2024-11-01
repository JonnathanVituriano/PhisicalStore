const express = require('express');
const lojaController = require('../controllers/lojaControllers.js');
const router = express.Router();

router.get('/lojas/:cep', lojaController.buscaLojasProximas);

module.exports = router;