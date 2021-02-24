const Sequelize = require('sequelize');
const Areas_Impacto = require('./Areas_impacto');
const Areas_Preocupacion = require('./Areas_preocupacion');
const db = require('../config/db');

const Gravedades = db.define('gravedades',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: Sequelize.INTEGER,
    puntaje: Sequelize.INTEGER, 
});

Gravedades.belongsTo(Areas_Impacto);
Gravedades.belongsTo(Areas_Preocupacion);

module.exports = Gravedades;