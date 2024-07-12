const mongoose = require("mongoose");
const Users = mongoose.model("User", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    privacyPolicy: {
        type: Boolean,
        default: true,
    },
});
module.exports = Users;
