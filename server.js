const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const path = require("path");
const cors = require("cors");

dotenv.config();

mongoose
    .connect("mongodb+srv://brandon:Pokemon8252@cluster0.lrsm3.mongodb.net/shoeshop?retryWrites=true&w=majority")
    .then(()=> console.log("db connection successful"))
    .catch((err) => {
        console.log(err);
    });


    app.use(express.static('client/build'));
    app.use(cors());
    app.use(express.json());
    app.use("/auth", authRoutes);
    app.use("/users", usersRoutes);
    app.use("/products", productRoute);
    app.use("/carts", cartRoute);
    app.use("/orders", orderRoute);
    app.use("/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
})