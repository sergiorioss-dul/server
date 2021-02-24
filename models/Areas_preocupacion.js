const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const Activos_criticos = require('../models/Activos_criticos');
const db = require('../config/db');

const Areas_Preocupacion = db.define('areas_preocupacion',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    actor: Sequelize.STRING,
    medio: Sequelize.STRING,
    motivo: Sequelize.STRING,
    resultado: Sequelize.INTEGER,
    probabilidad: Sequelize.INTEGER,
    accion_tomada: Sequelize.INTEGER,
});
Areas_Preocupacion.belongsTo(Activos_criticos);
Areas_Preocupacion.belongsTo(Usuarios);
module.exports = Areas_Preocupacion;