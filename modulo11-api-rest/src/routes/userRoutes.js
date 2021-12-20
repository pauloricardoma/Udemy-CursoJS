import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middleware/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // lista usuários
// router.get('/:id', loginRequired, userController.show); // lista usuário

// Não deverá passar o id, o controle do usuário será somente nos dados
// se existisse um administrador, poderia ter acesso nesses casos
// será usado o id do token para esses controles de usuário
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
Padrões a serem seguidos na criação do controller
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
