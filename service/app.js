const express = require('express');
const app = express();
const port = 8000;


// prior working example
/* app.get('/', (req, res) => {
    res.send('<h2>Hello World, I am a Test App</h2>')
})

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
}) */


// new work
const usersRouter = require('./routes/users');

app.use(express.json());

app.use('/api/v1/users', usersRouter);

app.get('/', (req, res) => {
    res.send('<h2>Hello World, I am a Test App</h2>')
})

app.post('/api/v2/users', (req, res) => {
    res.status(501);
    res.send('New user update');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});