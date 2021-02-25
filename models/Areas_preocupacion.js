const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const Activos_criticos = require('../models/Activos_criticos');
const db = require('../config/db');

const Areas_Preocupacion = db.define('area_preocupacion',{
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
},{
    underscored: true,
    tableName: 'areas_preocupacion'
});
Areas_Preocupacion.belongsTo(Activos_criticos, { foreignKey: { allowNull: false }});
Areas_Preocupacion.belongsTo(Usuarios, { foreignKey: { allowNull: false }});
module.exports = Areas_Preocupacion;
