const Sequelize = require('sequelize');
const Areas_Preocupacion = require('./Areas_preocupacion');
const db = require('../config/db');

const Consecuencias = db.define('consecuencia',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion : Sequelize.STRING
},{
    underscored: true,
    tableName: 'consecuencias'
});

Consecuencias.belongsTo(Areas_Preocupacion, { foreignKey: { allowNull: false }});
module.exports = Consecuencias;
