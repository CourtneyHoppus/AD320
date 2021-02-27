const mongoose = require('mongoose');
require('dotenv').config({ path: '../../config/config.env' });

const usersData = require('../data/usersData');

const User = require('../models/user');

usersData.usersList.forEach((user) => {
    User.create(user).catch((err) => console.log(err));
});

const admin = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const uri = `mongodb+srv://${admin}:${password}@testcluster.2t0xa.mongodb.net/testDatabase?retryWrites=true&w=majority`;
mongoose;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('Connected successfully'); },
        (err) => { console.log(`Connection failed with ${err}`); },
    );

setTimeout(() => mongoose.connection.close(), 2000);




