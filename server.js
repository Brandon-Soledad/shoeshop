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
    app.use("/api/auth", authRoutes);
    app.use("/api/users", usersRoutes);
    app.use("/api/products", productRoute);
    app.use("/api/carts", cartRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/checkout", stripeRoute);
    app.use(require("./routes"));


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
})