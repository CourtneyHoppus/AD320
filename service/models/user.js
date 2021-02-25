const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    lastName: {type: String, required: true},
    firstName: {type: String, required: true},
    accountID: String,
    status: {
        type: String, 
        enum: ['buyer','seller','admin'],
        default: 'buyer'
    },
    active: {type: Boolean, default: true},
});

const User = mongoose.model("User", userSchema);

module.exports = User;