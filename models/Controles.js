const Sequelize = require('sequelize');
const Areas_Preocupacion = require('./Areas_preocupacion');
const Contenedores = require('./Contenedores');
const db = require('../config/db');

const Controles = db.define('control',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion : Sequelize.STRING
},{
    underscored: true,
    tableName: 'controles'
});

Controles.belongsTo(Contenedores, { foreignKey: { allowNull: false }});
Controles.belongsTo(Areas_Preocupacion, { foreignKey: { allowNull: false }});
module.exports = Controles;
