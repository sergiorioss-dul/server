const Sequelize = require('sequelize');
const Activos_criticos = require('../models/Activos_criticos');
const db = require('../config/db');

const Requerimientos_seguridad = db.define('requerimiento_seguridad',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    descripcion1: Sequelize.STRING,
    descripcion2: Sequelize.STRING,

},{
    underscored: true,
    tableName: 'requerimientos_seguridad'
});

Requerimientos_seguridad.belongsTo(Activos_criticos, { foreignKey: { allowNull: false }});
module.exports = Requerimientos_seguridad;
