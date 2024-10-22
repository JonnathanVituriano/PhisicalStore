const express = require('express');
const lojaController = require('../controller/lojaController');
const router = express.Router();

router.get('/lojas/:cep', lojaController.buscarLojasProximas);

module.exports = router;