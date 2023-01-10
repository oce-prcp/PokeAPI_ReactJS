const { model, Schema } = require("mongoose");

// Schema de l'utilisateur
// Schema of the user's
const Utilisateur = new Schema({
  pseudo: String,
  password: String,
  pokedex: [Number],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("User", Utilisateur, "users");
