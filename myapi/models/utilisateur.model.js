const { model, Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

// Schema de l'utilisateur
// Schema of the user's
const Utilisateur = new Schema({
  pseudo: {type: String, unique: true},
  password: String,
  pokedex: [Number],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Utilisateur.plugin(uniqueValidator);

module.exports = model("User", Utilisateur, "users");
