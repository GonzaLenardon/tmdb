const User = require("./usuario");
const Favoritos = require("./favoritos");

Favoritos.belongsTo(User);

module.exports = { User, Favoritos };
