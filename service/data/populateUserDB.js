const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/../.env` });

const usersData = require('./usersData');

const User = require('../models/user');

usersData.usersList.forEach((user) => {
    User.create(user).catch((err) => console.log(err));
});

const admin = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
console.log(admin, password)
const uri = `mongodb+srv://${admin}:${password}@testcluster.2t0xa.mongodb.net/testDatabase?retryWrites=true&w=majority`;
mongoose;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('Connected successfully'); },
        (err) => { console.log(`Connection failed with ${err}`); },
    );

setTimeout(() => mongoose.connection.close(), 2000);
