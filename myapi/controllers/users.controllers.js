const { MongoDecompressionError } = require("mongodb");
const User = require("../models/utilisateur.model.js");

const CreateUser = async (req, res) => {
  try {
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    const utilisateur = new User();
    utilisateur.pseudo = pseudo;
    utilisateur.password = password;
    await utilisateur.save();
    res.status(200).send("Vous avez créé un utilisateur");
  } catch (error) {
    res.status(500).send("Erreur rencontrée");
  }
};

const AddPokemon = async (req, res) => {
  try {
    const id = req.body.id;
    const user = await User.findOne({ pseudo: req.user.name });
    user.pokedex.push(id);
    await user.save();
    await res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).send("Erreur rencontrée");
  }
};

const GetPokemons = async (req, res) => {
  try {
    const user = await User.findOne({ pseudo: req.user.name });
    const pokedex = user.pokedex;
    await res.status(200).json({ message: "Success", data: pokedex });
  } catch (error) {
    res.status(500).send("Erreur rencontrée");
  }
};

module.exports = {
  CreateUser,
  AddPokemon,
  GetPokemons,
};
