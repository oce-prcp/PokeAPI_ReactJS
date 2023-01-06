const { model, Schema} = require('mongoose');

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