const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const db = require('../config/db');

const Areas_impacto = db.define('area_impacto',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    prioridad: Sequelize.INTEGER

},{
    underscored: true,
    tableName: 'areas_impacto'
});
Areas_impacto.belongsTo(Usuarios, { foreignKey: { allowNull: false }});
module.exports = Areas_impacto;
