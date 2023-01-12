const User = require("../models/utilisateur.model.js")
// Fonction d'authentification pour la connexion 
// Authentication function for the connection
const jwt = require('jsonwebtoken');
const isAuthenticated = async (req, res, next) => {
    try {
        const username = req.headers.username
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        const user = await User.findOne({username: username})
        if(!username){
            res.status(401).send("Connectez-vous avant de réaliser cette action")
            return
        }
        if (!user){
            res.status(401).send("Vérifier l'orthographe")
            return
        }
        req.user = user
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        res.status(500).send("Erreur D'authentification")
    }
};




module.exports = {isAuthenticated}