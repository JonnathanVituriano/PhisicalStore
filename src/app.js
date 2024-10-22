const express = require('express');
const conectarMongoDB = require('./config/database.js');
const lojaRoutes = require('./routes/lojaRoutes.js');
const winston = require('winston');

const app = express();
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transport.File({filename: 'logs.logs.json'})
    ]
});

//Middleware de log
app.use((req, res, next) => {
    logger.info({ method: req.method, url: req.url, timestamp: new Date().toISOString() });
});

//conectar ao MongoDB
conectarMongoDB();

//definir as rotas
app.use('/', lojaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});