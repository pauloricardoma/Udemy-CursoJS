"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middleware/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index); // lista usuários
// router.get('/:id', loginRequired, userController.show); // lista usuário

// Não deverá passar o id, o controle do usuário será somente nos dados
// se existisse um administrador, poderia ter acesso nesses casos
// será usado o id do token para esses controles de usuário
router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
Padrões a serem seguidos na criação do controller
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
