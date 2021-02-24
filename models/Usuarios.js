const Sequelize = require('sequelize');
const db = require('../config/db');

const Usuarios = db.define('usuarios',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    usuario: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
    },
    nombre: {
        type:Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = Usuarios;