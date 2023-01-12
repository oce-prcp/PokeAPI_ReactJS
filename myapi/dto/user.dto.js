const utilisateur = require("../models/utilisateur.model");

// Permets de créer un utilisateur et vérifie si l'utilisateur exist déjà et vérifie si le mot de passe est incorrect
// Allows you to create a user and check if the the user exist ans the password is incorrect
const CreateUtilisateur = async (req, res, next) => {
  try {

    const pseudo = req.body.pseudo;
    const motDePasse = req.body.password;
    const userExist = await utilisateur.exists({ pseudo: pseudo });
    if (!pseudo || !motDePasse) {
      res.status(400).send("Mot de passe ou pseudo incorect ");
      return;
    }
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
