const sequelize = require("sequelize");

const db = new sequelize("tdmbusuarios", "postgres", "postgres", {
  logging: false,
  dialect: "postgres",
  host: "localhost",
});

module.exports = db;
