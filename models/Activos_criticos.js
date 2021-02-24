const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const Requerimientos_seguridad = require('../models/Requerimientos_seguridad');
const db = require('../config/db');

const Activos_criticos = db.define('activos_criticos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    justificacion: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    propietario: Sequelize.STRING,
});
Activos_criticos.belongsTo(Usuarios);
module.exports = Activos_criticos;