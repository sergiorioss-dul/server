const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const db = require('../config/db');

const Areas_impacto = db.define('areas_impacto',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    prioridad: Sequelize.INTEGER

});
Areas_impacto.belongsTo(Usuarios);
module.exports = Areas_impacto;