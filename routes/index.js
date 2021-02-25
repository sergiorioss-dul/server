const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

module.exports = function(){
    router.get('/',authController.userLogin);
    router.post('/',authController.autenticarUsuario);
    //CRUD USUARIOS
    router.post('/usuarios/nuevo',usuarioController.crear);
    router.get('/usuarios',usuarioController.getAll);
    router.patch('/usuarios/editar/:id',usuarioController.editar);
    router.delete('/usuarios/eliminar/:id',usuarioController.eliminar);
    return router;
}
