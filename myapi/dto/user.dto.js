const utilisateur = require("../models/utilisateur.model")

const CreateUtilisateur = async(req, res,next) => {
    try{
        //verif si le pseudo et le mdp et correct
        const pseudo = req.body.pseudo
        const motDePasse = req.body.motDePasse
        const userExist = await utilisateur.exists({pseudo: pseudo})
        if (!pseudo && !motDePasse) {
            res.status(400).send("mot de passe ou pseudo incorect ")
            return
        }
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