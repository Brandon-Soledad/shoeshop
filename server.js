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
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("db connection successful"))
    .catch((err) => {
        console.log(err);
    });


    app.use(cors());
    app.use(express.json());
    app.use("/api/auth", authRoutes);
    app.use("/api/users", usersRoutes);
    app.use("/api/products", productRoute);
    app.use("/api/carts", cartRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
})