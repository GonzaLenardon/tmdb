const sequelize = require("sequelize");
const db = require("./_db");

class Favoritos extends sequelize.Model {}

Favoritos.init(
  {
    peliculas: {
      type: sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;
