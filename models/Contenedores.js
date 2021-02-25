const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const db = require('../config/db');

const Contenedores = db.define('contenedor',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: Sequelize.INTEGER,
    localizacion: Sequelize.INTEGER,
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    propietario: Sequelize.STRING, 
},{
    underscored: true,
    tableName: 'contenedores'
});
Contenedores.belongsTo(Usuarios, { foreignKey: { allowNull: false }});

module.exports = Contenedores;

