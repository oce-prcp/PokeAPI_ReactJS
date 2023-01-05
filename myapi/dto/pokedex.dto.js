const pokedex = require("../models/pokedex.model.js")

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
module.exports = {
    CreatePokedex}

