const { MongoDecompressionError } = require("mongodb")
const User = require("../models/utilisateur.model.js")

const CreateUser = async(req, res) => {
    try {
        const pseudo = req.body.pseudo
        const motDePasse = req.body.motDePasse
        const utilisateur = new User()
        utilisateur.pseudo = pseudo
        utilisateur.motDePasse = motDePasse
        await utilisateur.save()
        res.status(200).send("Vous avez créé un utilisateur")
    } 
    catch (error) {
        res.status(500).send("Erreur rencontrée")
    }
}

module.exports = {
    CreateUser}