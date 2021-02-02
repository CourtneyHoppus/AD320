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

app.use('/v1/users', usersRouter);
app.post('/v2/users', (req, res) => {
    res.send('Something in the future');
})

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
});