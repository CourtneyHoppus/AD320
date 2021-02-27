const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    to: {type: String, required: true},
    from: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;