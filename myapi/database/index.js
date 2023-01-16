const mongoose = require("mongoose");
const { connect, set } = mongoose;

// Conexion à la base de données
// connection to the database
mongoose.connection.on("connected", () => {
    console.log("La connexion à la base de données est établi");
});

// Reconnexion à la base de données
// Reconnexion to the database
mongoose.connection.on("reconnected", () => {
    console.log("La connexion à la base de données en cours");
});

// Deconnexion à la base de données
// Deconnexion to the database
mongoose.connection.on("disconnected", () => {
    console.log("La connexion à la base de données est terminé");
});

// Connexion à la base de données fermé 
// Connection to the database Closed
mongoose.connection.on("close", () => {
    console.log("La connexion à la base de données est fermé");
});

// La connection à la base de données à rencontré une erreur
// The connection to the database encoutered an error 
mongoose.connection.on("error", (error) => {
    console.log("La connexion à la base de données à rencontrer une erreur", error);
});

// Lien de la base de données de mongoDB
// Link to the database mongoDb
set("debug", true);
connect(
    "mongodb+srv://oce:Gomette2003@cluster0.56xbhyw.mongodb.net/?retryWrites=true&w=majority"
);
