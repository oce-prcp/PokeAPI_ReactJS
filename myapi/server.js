const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js")
const userdto = require("../dto/users.dto.js")
const usercontroller = require("../controllers/users.controller.js");
const { ServerApiVersion } = require("mongodb");
require("./database")

const app = express();
Server.use(expres.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("API écoute sur le port 3000");
});
