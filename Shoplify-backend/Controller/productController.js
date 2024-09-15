const Product = require('../model/product');

const AddProduct = async (req, res) => {
    let id;
    const { name, image, category, new_price, old_price } = req.body;
    let products = await Product.find({});
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name,
        image,
        category,
        new_price,
        old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name,
    });
};

const RemoveProduct = async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed!");
    res.json({
        success: true,
    });
};

const AllProducts = async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
};

const NewCollection = async (req, res) => {
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);
    console.log("NewCollection fetched");
    res.send(newCollection);
};

module.exports = { AddProduct, RemoveProduct, AllProducts, NewCollection };
