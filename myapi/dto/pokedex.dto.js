const pokedex = require("../models/pokedex.model.js");

const CreatePokedex = async (req, res, next) => {
  try {
    const user = req.user;
    if (!pseudo) {
      res.status(400).send("Aucun pseudo trouvé");
      return;
    }
    const motDePasse = req.body.motDePasse;
    if (!motDePasse) {
      res.status(400).send("Aucun pseudo trouvé");
      return;
    }
    const userExist = await utilisateur.exists({ pseudo: pseudo });
    if (userExist) {
      res.status(400).send("L'utilisateur existe déjà");
      return;
    }
    return next();
  } catch (error) {
    res.status(500).send("Une erreur est survenue côté serveur");
  }
};

module.exports = {
  CreateUtilisateur,
};

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