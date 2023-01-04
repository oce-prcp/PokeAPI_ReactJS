const utilisateur = require("../models/utilisateur.model")

const CreateUtilisateur = async(req, res,next) => {
    try{
        const pseudo = req.body.pseudo
        if (!pseudo) {
            res.status(400).send("Aucun pseudo trouvé")
            return
        }
        const motDePasse = req.body.motDePasse
        if (!motDePasse) {
            res.status(400).send("Aucun pseudo trouvé")
            return
        }
        const userExist = await utilisateur.exists({pseudo: pseudo})
        if(userExist) {
            res.status(400).send("L'utilisateur existe déjà")
            return
        }
        return next();
    }
    catch(error){
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}


module.exports = {
    CreateUtilisateur}