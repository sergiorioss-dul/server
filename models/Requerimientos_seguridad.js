const Sequelize = require('sequelize');
const Activos_criticos = require('../models/Activos_criticos');
const db = require('../config/db');

const Requerimientos_seguridad = db.define('requerimientos_seguridad',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    descripcion1: Sequelize.STRING,
    descripcion2: Sequelize.STRING,

});
//1:n un activo puede tener muchos requerimientos
Requerimientos_seguridad.belongsTo(Activos_criticos);
module.exports = Requerimientos_seguridad;