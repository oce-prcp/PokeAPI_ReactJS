const { MongoDecompressionError } = require("mongodb")
const Pokedex = require("../models/pokedex.model.js")

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

module.exports = {
    CreatePokedex}