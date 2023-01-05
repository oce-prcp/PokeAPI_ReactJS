const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js")
const userdto = require("./dto/user.dto.js")
const usercontroller = require("./controllers/users.controllers.js");
require("./database")


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Crée un utilisateur \\ 
app.post("/users/register", 
userdto.CreateUtilisateur,usercontroller.CreateUser)

app.listen(3000, () => {
  console.log("API écoute sur le port 3000");
});

