const Sequelize = require('sequelize');
const Areas_impacto = require('../models/Areas_impacto');
const db = require('../config/db');

const Criterios = db.define('criterio',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    bajo: Sequelize.STRING,
    moderado: Sequelize.STRING,
    alto: Sequelize.STRING,
},{
    underscored: true,
    tableName: 'criterios'
});
Criterios.belongsTo(Areas_impacto, { foreignKey: { allowNull: false }});
module.exports = Criterios;
