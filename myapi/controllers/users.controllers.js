const User = require("../models/utilisateur.model.js")

const CreateUser = async(req, res) => {
    try {
        const user = req.body.user
        const utilisateur = new User()
        utilisateur.username = user
        await utilisateur.save()
        res.status(200).send("Vous avez créé un utilisateur")
    } 
    catch (error) {
        res.status(500).send("Erreur rencontrée")
    }
}

module.exports = {
    CreateUser}