const Sequelize = require('sequelize');
const Areas_Impacto = require('./Areas_impacto');
const Areas_Preocupacion = require('./Areas_preocupacion');
const db = require('../config/db');

const Gravedades = db.define('gravedad',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: Sequelize.INTEGER,
    puntaje: Sequelize.INTEGER, 
},{
    underscored: true,
    tableName: 'gravedades'
});

Gravedades.belongsTo(Areas_Impacto, { foreignKey: { allowNull: false }});
Gravedades.belongsTo(Areas_Preocupacion, { foreignKey: { allowNull: false }});

module.exports = Gravedades;
