const User = require("../models/user");


// @desc    get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: 'show all users' });
}

// @desc    get a user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `show user ${req.params.id}`});
}

// @desc    create user
// @route   POST /api/v1/users
// @access  Private
exports.createUser = (req, res, next) => {
    if (
        req.body.lastName.trim().length === 0 ||
        req.body.firstName.trim().length === 0
        ) {
            res
                .status(411)
                .send({error: "Must have first and last name"});
        }
    if (req.body.status == null) {
        res
            .status(406)
            .send({error: "Must pick account type: buyer, seller, admin"});
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountID: req.body.accountID,
        status: req.body.status
    };
    
    User.create(user)
        .then((newUser) => {
            res
                .status(200)
                .send({ userId: newUser._id, success: true, msg: 'create new user' });
        })
        .catch((error) => {
            console.log(error);
            next(error);
        });
};

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `update user ${req.params.id}` });
}

// @desc    delete user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res, next) => {
    res
        .status(200)
        .send({ success: true, msg: `delete user ${req.params.id}` });
}