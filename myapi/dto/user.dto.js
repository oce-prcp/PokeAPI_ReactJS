const utilisateur = require("../models/utilisateur.model")

const CreateUtilisateur = async(req, res,next) => {
    try{
        //verif si le pseudo et le mdp et correct
        const pseudo = req.body.pseudo
        const motDePasse = req.body.password
        const userExist = await utilisateur.exists({pseudo: pseudo})
        if (!pseudo || !motDePasse) {
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

const AddPokemon = async(req, res, next) => {
    try {
        const {id, pseudo} = req.body;
        if(!id || !pseudo || id === undefined || id === undefined) {
            res.status(404).json({message: "User not found"})
            return
        }

        const user = await utilisateur.findOne({ pseudo });
        if(!id || !user || user === undefined || user === null) {
            res.status(404).json({ status: 404, message: "User not found" });
            return
        }

        next()
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontréex");
    }
}

const GetPokemons = async(req, res, next) => {
    try {
        const user = await utilisateur.findOne({ pseudo: req.headers.pseudo });
        if(user === null || user === undefined || !user){
            res.status(404).json({messsage: "Bad content"})
            return
        }
        if(user.pokedex === undefined || user.pokedex === null){
            res.status(404).json({messsage: "Bad content"})
            return
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send("Erreur rencontrée");
    }
};


module.exports = {
    CreateUtilisateur,
    GetPokemons,
    AddPokemon
}