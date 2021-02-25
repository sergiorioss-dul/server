const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const db = require('../config/db');

const Activos_criticos = db.define('activo_critico',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    justificacion: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    propietario: Sequelize.STRING,
    requerimiento_importante: Sequelize.INTEGER
}, {
    underscored: true,
    tableName: 'activos_criticos'
});

Activos_criticos.belongsTo(Usuarios, { foreignKey: { allowNull: false }});
module.exports = Activos_criticos;
