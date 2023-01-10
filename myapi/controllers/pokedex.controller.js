const Pokedex = require("../models/pokedex.model.js")

// Permets de créer un pokédex 
// Allow you to create a pokedex for a user
const CreatePokedex = async(req, res) => {
    try {
        const user = req.user
        const pokedex = new Pokedex()
        pokedex.user = user.id
        await pokedex.save()
        res.status(200).send("Vous avez créé un pokedex")
    } 
    catch (error) {
        res.status(500).send("Erreur rencontrée")
    }
}

// Permets d'ajouter un pokdemon au pokédex
// Allow you to add pokemon in the pokedex
const AddPokemon = async (req, res) => {
    try {
        const id = req.body.id;
        const user = await User.findOne({ pseudo: req.body.pseudo });
        user.pokedex.push(id);
        await user.save();
        await res.status(200).json({ message: "Success" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontrée");
    }
};

// Permets d'afficher le pokedex de l'utilisateur
// Allow to display the user's pokedex
const GetPokemons = async (req, res) => {
    try {
        const user = await User.findOne({ pseudo: req.headers.pseudo });
        console.log(user);
        const pokedex = user.pokedex;
        console.log(pokedex);
        res.status(200).json({ pokedex });
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontrée");
    }
};

module.exports = 
{
    CreatePokedex,
    AddPokemon,
    GetPokemons,
}