const Sequelize = require('sequelize');
const Areas_Preocupacion = require('./Areas_preocupacion');
const db = require('../config/db');

const Consecuencias = db.define('consecuencias',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion : Sequelize.STRING
});

Consecuencias.belongsTo(Areas_Preocupacion);
module.exports = Consecuencias;