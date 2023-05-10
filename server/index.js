const express = require("express");
const app = express();
const { sequelize } = require("sequelize");
const db = require("./models/_db");
const router = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", router);

db.sync({ force: false }).then(() => {
  app.listen(5000, (req, res) => {
    console.log("Server corrriendo en puerto 5000");
  });
});
