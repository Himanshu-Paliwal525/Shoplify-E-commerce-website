const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartItem = new mongoose.model("CartItem", {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    id: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    size: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    curr_price: { type: Number, required: true },
});
module.exports = CartItem;
