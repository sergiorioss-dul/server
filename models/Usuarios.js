const Sequelize = require("sequelize");
const db = require("../config/db");

const Usuarios = db.define(
  "usuarios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nombre: Sequelize.STRING,
  },
  {
    underscored: true,
  }
);

module.exports = Usuarios;
