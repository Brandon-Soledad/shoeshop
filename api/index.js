const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://brandon:Pokemon8252@cluster0.lrsm3.mongodb.net/shoeshop?retryWrites=true&w=majority"

    )
    .then(()=> console.log("db connection successful"))
    .catch((err) => {
        console.log(err);
    });

app.listen(5000, () => {
    console.log("Backend server is running!");
})