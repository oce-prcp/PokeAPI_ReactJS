const { model, Schema } = require("mongoose");

const pokedexUser = new Schema({
  pokemon: [Number],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Id,
    default: Id.now,
  },
});

module.exports = model("pokedex", pokedexUser, "pokedexUser");
