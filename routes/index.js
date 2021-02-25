const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');

module.exports = function(){
    router.get('/',authController.userLogin);
    router.post('/',authController.autenticarUsuario);
    //CRUD USUARIOS
    router.post('/usuarios/nuevo',usuarioController.crearCuenta);
    router.get('/usuarios',usuarioController.verCuentas);
    router.patch('/usuarios/editar/:id',usuarioController.editarCuenta);
    router.delete('/usuarios/eliminar/:id',usuarioController.eliminarCuenta);
    return router;
}