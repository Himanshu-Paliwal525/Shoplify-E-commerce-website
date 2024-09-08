require("dotenv").config();
const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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

// Connect to MongoDB Atlas using environment variable
const mongoURI = process.env.MONGODB_URI;
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Shoplify-ecommerce",
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Configure multer
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

// Set port from environment variable or default to 4000
const port = process.env.PORT || 4000;

const authenticateJWT = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }
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
        image_url: `http://localhost:${port}/images/${req.file.filename}`, // Adjust this URL for your deployment
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

// Listen on specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
