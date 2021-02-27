const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const morgan = require('morgan');

// route files
const usersRouter  = require('./routes/users');
const messagesRouter = require('./routes/messages');

// load env vars
dotenv.config();

const app = express();
app.use(express.json());

// dev logging middleware
/* if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} */

const admin = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const uri = `mongodb+srv://${admin}:${password}@testcluster.2t0xa.mongodb.net/testDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log('Connected successfully'); },
        (err) => { console.log(`Connection failed with ${err}`); },
    );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', (err) => { console.log(`MongoDB connection error: ${err}`); });
db.on('close', () => { console.log('MongoDB connection closed'); });

// mount routers
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/messages', messagesRouter);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    console.log(`Listening at http://localhost:${PORT}`)
);