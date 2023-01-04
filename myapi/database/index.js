const mongoose = require("mongoose");
const { connect, set } = mongoose;
const MongoClient = require('mongodb').MongoClient;

// Connect to MongoDB
mongoose.connection.on("connected", () => {
    console.log("Connection mongodb Established");
});

mongoose.connection.on("reconnected", () => {
    console.log("Connection Restablished");
});

mongoose.connection.on("disconnected", () => {
    console.log("Connection Restablished");
});

mongoose.connection.on("close", () => {
    console.log("Connection Closed");
});

mongoose.connection.on("error", (error) => {
    console.log("DB ERROR", error);
});

set("debug", true);
connect(
    "mongodb+srv://WIEZII:<password>@cluster0.nn5mj3f.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
);

app.listen(3000, () => {
    console.log("listening on port 3000");
});