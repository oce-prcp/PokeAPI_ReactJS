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
    res.status(200).json(utilisateur);
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur rencontrée");
  }
};

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

const GetPokemons = async (req, res) => {
  try {
    const user = await User.findOne({ pseudo: req.headers.pseudo });
    const pokedex = user.pokedex;
    console.log(pokedex);
    await res.status(200).json({ message: "Success", data: pokedex });
  } catch (error) {
    console.log(error);
    res.status(500).send("Erreur rencontrée");
  }
};

module.exports = {
  CreateUser,
  AddPokemon,
  GetPokemons,
};
