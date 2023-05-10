const express = require("express");
const router = express.Router();
const axios = require("axios");
const { User, Favoritos } = require("../models");

router.get("/user", (req, res) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

router.post("/user/signup", (req, res) => {
  User.create(req.body)
    .then((user) => res.send(user))
    .catch((error) => res.send(error));
});

router.post("/user/login", (req, res) => {
  const { usuario, password } = req.body;

  User.findOne({ where: { usuario } })
    .then((userLog) => {
      if (!userLog) res.status(401).send(`El ${usuario} no está registrado`);

      userLog.validatePassword(password).then((user) => {
        // console.log("User back", user)
        if (user) res.status(200).send(userLog);
        else res.status(401).send("La contraseña ingresada no es la correcta");
      });
    })
    .catch((err) => console.log(err));
});

router.post("/api/peliculas/favoritos", (req, res) => {
  Favoritos.findOrCreate({ where: { peliculas: req.body.peliculas } });
  res.status(201).send(`pelicula insterada ${req.body.peliculas}`);
});

module.exports = router;
