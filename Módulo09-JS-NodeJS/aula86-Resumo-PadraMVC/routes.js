const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// rotas vai decidir qual controller vai controlar a rota

// Rotas da home
// Com esse middleware no caminho, o próximo só sera executado após ele terminar
route.get('/', middleware, homeController.paginaInicial); // Usamos middleware para executar funções no meio do caminho
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
