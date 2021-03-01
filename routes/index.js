const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/usuarioController');
const requerimientoSeguridadController = require('../controllers/requerimientoSeguridadController');
const gravedadController = require('../controllers/gravedadController');
const criterioController = require('../controllers/criterioController');
const controlController = require('../controllers/controlController');
const contenedorController = require('../controllers/contenedorController');
const consecuenciaController = require('../controllers/consecuenciaController');
const areaPreocupacionController = require('../controllers/areaPreocupacionController');
const areaImpactoController = require('../controllers/areaImpactoController');
const activoCriticoController = require('../controllers/activoCriticoController');

module.exports = function(){
    router.get('/',authController.userLogin);
    router.post('/',authController.autenticarUsuario);
    //CRUD USUARIOS
    router.post('/usuarios/nuevo',usuarioController.crear);
    router.get('/usuarios',usuarioController.getAll);
    router.patch('/usuarios/editar/:id',usuarioController.editar);
    router.delete('/usuarios/eliminar/:id',usuarioController.eliminar);
    //CRUD REQUERIMIENTOS_SEGURIDAD
    router.post('/requerimientos/nuevo',requerimientoSeguridadController.crear);
    router.get('/requerimientos/:activo_critico_id',requerimientoSeguridadController.getAll);
    router.patch('/requerimientos/editar/:id',requerimientoSeguridadController.editar);
    router.delete('/requerimientos/eliminar/:id',requerimientoSeguridadController.eliminar);
    //CRUD GRAVEDADES
    router.post('/gravedades/nuevo',gravedadController.crear);
    router.get('/gravedades/:area_preocupacion_id',gravedadController.getAll);
    router.patch('/gravedades/editar/:id',gravedadController.editar);
    router.delete('/gravedades/eliminar/:id',gravedadController.eliminar);
     //CRUD CRITERIOS
     router.post('/criterios/nuevo',criterioController.crear);
     router.get('/criterios/:area_impacto_id',criterioController.getAll);
     router.patch('/criterios/editar/:id',criterioController.editar);
     router.delete('/criterios/eliminar/:id',criterioController.eliminar);
     //CRUD CONTROLES
     router.post('/controles/nuevo',controlController.crear);
     router.get('/controles/:area_preocupacion_id',controlController.getAll);
     router.patch('/controles/editar/:id',controlController.editar);
     router.delete('/controles/eliminar/:id',controlController.eliminar);
     //CRUD CONTENEDORES
     router.post('/contenedores/nuevo',contenedorController.crear);
     router.get('/contenedores/:usuario_id',contenedorController.getAll);
     router.patch('/contenedores/editar/:id',contenedorController.editar);
     router.delete('/contenedores/eliminar/:id',contenedorController.eliminar);
     //CRUD CONSECUENCIAS
     router.post('/consecuencias/nuevo',consecuenciaController.crear);
     router.get('/consecuencias/:area_preocupacion_id',consecuenciaController.getAll);
     router.patch('/consecuencias/editar/:id',consecuenciaController.editar);
     router.delete('/consecuencias/eliminar/:id',consecuenciaController.eliminar);
     //CRUD AREAS_PREOCUPACION
     router.post('/areas_preocupacion/nuevo',areaPreocupacionController.crear);
     router.get('/areas_preocupacion/:usuario_id',areaPreocupacionController.getAll);
     router.patch('/areas_preocupacion/editar/:id',areaPreocupacionController.editar);
     router.delete('/areas_preocupacion/eliminar/:id',areaPreocupacionController.eliminar);
     //CRUD AREAS_IMPACTO
     router.post('/areas_impacto/nuevo',areaImpactoController.crear);
     router.get('/areas_impacto/:usuario_id',areaImpactoController.getAll);
     router.patch('/areas_impacto/editar/:id',areaImpactoController.editar);
     router.delete('/areas_impacto/eliminar/:id',areaImpactoController.eliminar);
     //CRUD ACTIVOS_CRITICOS
     router.post('/activos_criticos/nuevo',activoCriticoController.crear);
     router.get('/activos_criticos/:usuario_id',activoCriticoController.getAll);
     router.patch('/activos_criticos/editar/:id',activoCriticoController.editar);
     router.delete('/activos_criticos/eliminar/:id',activoCriticoController.eliminar);
     
     

    return router;
}
