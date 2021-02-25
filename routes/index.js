const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

module.exports = function(){
    router.get('/',authController.userLogin);
    router.post('/',authController.autenticarUsuario);
    return router;
}