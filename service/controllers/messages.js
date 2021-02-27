const Messages = require("../models/messages");


// @desc    get all messages
// @route   GET /api/v1/messages
// @access  Public
exports.getMessages = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: 'show all messages' });
}

// @desc    get a message
// @route   GET /api/v1/messages/:id
// @access  Public
exports.getMessage = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `show message ${req.params.id}`});
}

// @desc    create user
// @route   POST /api/v1/users
// @access  Private
exports.createMessage = (req, res, next) => {
    if (
        req.body.to.trim().length === 0 ||
        req.body.from.trim().length === 0
        ) {
            res
                .status(411)
                .send({error: "Must have to and from"});
        }
    if (req.body.subject == null || req.body.message == null) {
        res
            .status(406)
            .send({error: "Must have subject and message"});
    }

    const message = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        message: req.body.message
    };
    
    Messages.create(message)
        .then((newMessage) => {
            res
                .status(200)
                .send({ messageId: newMessage._id, success: true, msg: 'create new message' });
        })
        .catch((error) => {
            console.log(error);
            next(error);
        });
};

// @desc    update message
// @route   PUT /api/v1/messages/:id
// @access  Private
exports.updateMessage = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `update message ${req.params.id}` });
}

// @desc    delete message
// @route   DELETE /api/v1/messages/:id
// @access  Private
exports.deleteMessage = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `delete message ${req.params.id}` });
}