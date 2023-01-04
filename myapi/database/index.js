const mongoose = require("mongoose");
const { connect, set } = mongoose;

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
    "mongodb+srv://oce:Gomette2003@cluster0.56xbhyw.mongodb.net/?retryWrites=true&w=majority"
);
