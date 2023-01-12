const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js");
const userdto = require("./dto/user.dto.js");
const usercontroller = require("./controllers/users.controllers.js");

const pokedexdto = require("./controllers/pokedex.controller.js");
const AddPokemoncontroller = require("./controllers/pokedex.controller.js");


require("./database");
const cors = require("cors");

// Permet d'écouter le port 3000 
// Listen on port 3000
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Route principal de l'api
// Api main route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route pour crée l'utilisateur
// Route to create the user

// Ecoute le port 5000 pour l'api
//listen on port 5000
app.listen(5000, () => {
  console.log("API écoute sur le port 5000");
});

app.get("/users/pokemons", pokedexdto.GetPokemons, AddPokemoncontroller.GetPokemons);
app.patch("/users/pokemons", pokedexdto.AddPokemon, AddPokemoncontroller.AddPokemon);

app.post("/signup", usercontroller.signup);
app.post("/login", usercontroller.login);
