const Sequelize = require('sequelize');
const Areas_Preocupacion = require('./Areas_preocupacion');
const Contenedores = require('./Contenedores');
const db = require('../config/db');

const Controles = db.define('controles',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion : Sequelize.STRING
});

Controles.belongsTo(Contenedores);
Controles.belongsTo(Areas_Preocupacion);
module.exports = Controles;