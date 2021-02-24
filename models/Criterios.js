const Sequelize = require('sequelize');
const Areas_impacto = require('../models/Areas_impacto');
const db = require('../config/db');

const Criterios = db.define('criterios',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    bajo: Sequelize.STRING,
    moderado: Sequelize.STRING,
    alto: Sequelize.STRING,
});
Criterios.belongsTo(Areas_impacto);
module.exports = Criterios;