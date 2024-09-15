const CartItem = require("../model/CartItem");

const AddToCart = async (req, res) => {
    const { id, name, new_price, image, size } = req.body;
    const product = await CartItem.findOne({ id });
    const userId = await req.userId;
    if (product) {
        const updatedProduct = await CartItem.findOneAndUpdate(
            { id },
            { $inc: { quantity: 1 } },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Item quantity updated",
            product: updatedProduct,
        });
    } else {
        const newItem = new CartItem({
            id,
            userId,
            name,
            curr_price: new_price,
            image,
            size,
        });
        const savedItem = await newItem.save();
        res.status(201).json({
            success: true,
            message: "Item added to cart",
            product: savedItem,
        });
    }
};

const GetItemsOnCart = async (req, res) => {
    const userId = await req.userId;
    const AllItems = await CartItem.find({userId: userId});
    res.send(AllItems);
};

const UpdateItem = async (req, res) => {
    const { id, quantity } = req.body;
    const item = await CartItem.findOneAndUpdate(
        { id },
        { ...req.body, [quantity]: quantity },
        { new: true }
    );
    if (!item) {
        return res.json({ message: "Item not found" });
    }
    res.json(item);
};
const DeleteItem = async (req, res) => {
    const { id } = req.body;
    const item = await CartItem.findOneAndDelete({ id: id });
    if (!item) {
        return res.json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully", item });
};
module.exports = { AddToCart, GetItemsOnCart, UpdateItem, DeleteItem };
