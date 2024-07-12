const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const { login, signup } = require("./Controller/loginController");
const {
    AddProduct,
    RemoveProduct,
    AllProducts,
    NewCollection,
} = require("./Controller/productController");
const {
    AddToCart,
    GetItemsOnCart,
    DeleteItem,
    UpdateItem,
} = require("./Controller/cartController");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/hhmart");

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});
const upload = multer({ storage });
app.use("/images", express.static("upload/images"));
const port = 4000;

const authenticateJWT = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    console.log("token is:", token);
    if (token) {
        jwt.verify(token, "secret_ecom", (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }
            console.log(user);
            req.userId = new mongoose.Types.ObjectId(user.userId); // Convert userId to ObjectId
            next();
        });
    } else {
        res.status(401).json({ message: "Unauthorized: No token provided" });
    }
};

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
});

app.post("/login", login);
app.post("/signup", signup);

app.post("/addToCart", authenticateJWT, AddToCart);
app.get("/cart", authenticateJWT, GetItemsOnCart);
app.put("/cart", authenticateJWT, UpdateItem);
app.delete("/cart", DeleteItem);
// Admin Panel Functionality
app.post("/addProduct", AddProduct);
app.post("/removeProduct", RemoveProduct);
app.get("/allProducts", AllProducts);

app.get("/newCollection", NewCollection);

app.listen(4000);
