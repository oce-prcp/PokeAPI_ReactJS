const { model, Schema } = require("mongoose");

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
