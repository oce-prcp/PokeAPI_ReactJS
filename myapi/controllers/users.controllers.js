const User = require("../models/utilisateur.model.js");
const bcrypt = require("bcrypt");
// Permets de créer un utilisateur
// Allow you to create a user
// const CreateUser = async (req, res) => {
//   try {
//     const pseudo = req.body.pseudo;
//     const password = req.body.password;
//     const utilisateur = new User();
//     utilisateur.pseudo = pseudo;
//     utilisateur.password = password;
//     await utilisateur.save();
//     res.status(200).json(utilisateur);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Erreur rencontrée");
//   }
// };

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        pseudo: req.body.pseudo,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

const login = (req, res, next) => {
  User.findOne({ pseudo: req.body.pseudo })
      .then(user => {
          if (!user) {
              return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
          }
          bcrypt.compare(req.body.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                  }
                  res.status(200).json({
                      userId: user._id,
                      token: 'TOKEN'
                  });
              })
              .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

module.exports = {
  login,signup
};
