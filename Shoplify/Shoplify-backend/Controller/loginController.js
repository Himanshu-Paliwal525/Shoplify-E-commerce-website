const Users = require("../model/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check)
        return res
            .status(400)
            .json({ success: false, error: "Existing User found" });
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const { name, email, password, cartData } = req.body;
    console.log(req.body);
    const user = new Users({
        name,
        email,
        password,
        cartData,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "secret_ecom");
    res.json({ success: true, token });
};

const login = async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = { userId: user._id };
            const token = jwt.sign(data, "secret_ecom");
            res.json({ success: true, token });
        } else {
            res.json({ success: false, error: "Wrong Password" });
        }
    } else {
        res.json({ success: false, error: "Wrong Email Id" });
    }
};
module.exports = { login, signup };
