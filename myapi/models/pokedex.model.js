const { model, Schema} = require('mongoose');

// Schema du pokédex de l'utilisateur
// Schema of the user's pokémon
const pokedexUser = new Schema ({
    pokemon: [Number],
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
            },

        createdAt: {
            type: Date,
            default: Date.now,
        },
});
module.exports = model("pokedex", pokedexUser, "pokedexUser");