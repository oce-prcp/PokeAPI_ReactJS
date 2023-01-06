const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js");
const userdto = require("./dto/user.dto.js");
const usercontroller = require("./controllers/users.controllers.js");
require("./database");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Crée un utilisateur \\
app.post(
  "/users/register",
  userdto.CreateUtilisateur,
  usercontroller.CreateUser
);

app.listen(5000, () => {
  console.log("API écoute sur le port 5000");
});

app.get("/users/pokemons", userdto.GetPokemons, usercontroller.GetPokemons);

app.patch("/users/pokemons", userdto.AddPokemon, usercontroller.AddPokemon);
