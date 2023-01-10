const User = require("../models/utilisateur.model.js");

// Permets de créer un utilisateur
// Allow you to create a user
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

module.exports = {
  CreateUser,
};
