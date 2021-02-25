const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// route files
const users  = require('./routes/users');

// load env vars
dotenv.config({ path: './config/config.env'});

const app = express();

// dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 8000;

app.listen(
    PORT,
    console.log(`Listening at http://localhost:${process.env.NODE_ENV} mode on port ${PORT}`)
);