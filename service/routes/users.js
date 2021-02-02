const express = require('express');
const usersRouter = express.Router();

const usersData = require('../data/usersData');

usersRouter.route('/')
    .get((req, res) => {
        res.json(usersData.usersList);
    })
    .post((req, res) => {
        console.log(req.body);
        res.sendStatus(204);
    });

usersRouter.route('/:id')
    .get((req, res) => {
        const matchingUsers = users.filter((user) => {
            return req.params['id'] === user.id;
        })
        if (matchingUsers.length === 1) {
            res.send(matchingUsers[0]);
        } else {
            res.sendStatus(400);
        }
    });
module.exports = usersRouter;