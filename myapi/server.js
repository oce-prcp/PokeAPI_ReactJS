const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js")
const userdto = require("./dto/user.dto.js")
const usercontroller = require("./controllers/users.controllers.js");
const pokedexdto = require("./dto/pokedex.dto.js");
const pokedexcontroller = require("./controllers/pokedex.controller.js");
require("./database")


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a user 
app.post("/users/register", 
userdto.CreateUtilisateur,usercontroller.CreateUser)

//Create a pokedex
app.post("/users/pokedex",
isAuthenticated,pokedexdto.CreatePokedex,pokedexcontroller.CreatePokedex)

app.listen(5000, () => {
  console.log("API écoute sur le port 5000");
});

