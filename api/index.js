const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("db connection successful"))
    .catch((err) => {
        console.log(err);
    });

    app.use(express.json());
    app.use("/api/auth", authRoutes);
    app.use("/api/users", usersRoutes);
    

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
})