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
    //CRUD REQUERIMIENTOS_SEGURIDAD
    router.post('/requerimientos/nuevo',usuarioController.crear);
    router.get('/requerimientos',usuarioController.getAll);
    router.patch('/requerimientos/editar/:id',usuarioController.editar);
    router.delete('/requerimientos/eliminar/:id',usuarioController.eliminar);
    //CRUD GRAVEDADES
    router.post('/gravedades/nuevo',usuarioController.crear);
    router.get('/gravedades',usuarioController.getAll);
    router.patch('/gravedades/editar/:id',usuarioController.editar);
    router.delete('/gravedades/eliminar/:id',usuarioController.eliminar);
     //CRUD CRITERIOS
     router.post('/criterios/nuevo',usuarioController.crear);
     router.get('/criterios',usuarioController.getAll);
     router.patch('/criterios/editar/:id',usuarioController.editar);
     router.delete('/criterios/eliminar/:id',usuarioController.eliminar);
     //CRUD CONTROLES
     router.post('/controles/nuevo',usuarioController.crear);
     router.get('/controles',usuarioController.getAll);
     router.patch('/controles/editar/:id',usuarioController.editar);
     router.delete('/controles/eliminar/:id',usuarioController.eliminar);
     //CRUD CONTENEDORES
     router.post('/contenedores/nuevo',usuarioController.crear);
     router.get('/contenedores',usuarioController.getAll);
     router.patch('/contenedores/editar/:id',usuarioController.editar);
     router.delete('/contenedores/eliminar/:id',usuarioController.eliminar);
     //CRUD CONSECUENCIAS
     router.post('/consecuencias/nuevo',usuarioController.crear);
     router.get('/consecuencias',usuarioController.getAll);
     router.patch('/consecuencias/editar/:id',usuarioController.editar);
     router.delete('/consecuencias/eliminar/:id',usuarioController.eliminar);
     //CRUD AREAS_PREOCUPACION
     router.post('/areas-preocupacion/nuevo',usuarioController.crear);
     router.get('/areas-preocupacion',usuarioController.getAll);
     router.patch('/areas-preocupacion/editar/:id',usuarioController.editar);
     router.delete('/areas-preocupacion/eliminar/:id',usuarioController.eliminar);
     //CRUD AREAS_IMPACTO
     router.post('/areas_impacto/nuevo',usuarioController.crear);
     router.get('/areas_impacto',usuarioController.getAll);
     router.patch('/areas_impacto/editar/:id',usuarioController.editar);
     router.delete('/areas_impacto/eliminar/:id',usuarioController.eliminar);
     //CRUD ACTIVOS_CRITICOS
     router.post('/activos_criticos/nuevo',usuarioController.crear);
     router.get('/activos_criticos',usuarioController.getAll);
     router.patch('/activos_criticos/editar/:id',usuarioController.editar);
     router.delete('/activos_criticos/eliminar/:id',usuarioController.eliminar);
     
     

    return router;
}
