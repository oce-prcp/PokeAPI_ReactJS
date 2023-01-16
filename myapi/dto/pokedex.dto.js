const pokedex = require("../models/pokedex.model.js")

// Permet de crée un pokédex et vérifie si il existe déjà
// Allow you to create a pokedex and check if it already exists
const CreatePokedex = async(req, res,next) => {
    
    try{
        const user = req.user
        const PokedexExist = await utilisateur.exists({user: user.id})
        console.log(PokedexExist)
        if(PokedexExist) {
            res.status(400).send("Le pokdedex existe déjà")
            return
        }
        return next();
    }
    catch(error){
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}

// Permet d'ajouter un pokémon dans le pokédex
// Allow you to add a pokemon in the pokedex
const AddPokemon = async (req, res, next) => {
    try {
        const { id, pseudo } = req.body;
        if (!id || !pseudo || id === undefined || id === undefined) {
            res.status(404).json({ message: "User not found" });
                return;
    }
    const user = await utilisateur.findOne({ pseudo });
        if (!id || !user || user === undefined || user === null) {
            res.status(404).json({ status: 404, message: "User not found" });
                return;
    }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontréex");
    }
};

// Permet de récupérer les pokémons du pokédex
// Allow you to get the pokemons in the pokedex
    const GetPokemons = async (req, res, next) => {
        try {
        const user = await utilisateur.findOne({ pseudo: req.headers.pseudo });
        if (user === null || user === undefined) {
            res.status(404).json({ messsage: "Bad content" });
                return;
        }
        if (user.pokedex === undefined || user.pokedex === null) {
            res.status(404).json({ messsage: "Bad content" });
                return;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontrée");
    }
};

// Exportation des fonctions
// Exportation of the functions
module.exports = 
{
    CreatePokedex,
    GetPokemons,
    AddPokemon,
}


