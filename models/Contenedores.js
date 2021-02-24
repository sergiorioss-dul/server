const Sequelize = require('sequelize');
const Usuarios = require('../models/Usuarios');
const db = require('../config/db');

const Contenedores = db.define('contenedores',{
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
});
// Cada contenedor le pertenece a un usuario
Contenedores.belongsTo(Usuarios);

module.exports = Contenedores;

