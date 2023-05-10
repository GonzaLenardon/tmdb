const sequelize = require("sequelize");
const db = require("./_db");
const bc = require("bcrypt");

class User extends sequelize.Model {
  createHash(pass, salt) {
    return bc.hash(pass, salt);
  }

  validatePassword(password) {
    return this.createHash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    usuario: { type: sequelize.STRING, allowNull: false },
    email: { type: sequelize.STRING, validate: { isEmail: true } },
    password: { type: sequelize.STRING, allowNull: false },
    salt: { type: sequelize.STRING },
  },

  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  const salt = bc.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.password, user.salt)
    .then((resul) => (user.password = resul))
    .catch((err) => console.log(err));
});

module.exports = User;
