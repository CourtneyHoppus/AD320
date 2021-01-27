const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('<h2>Hello World, I am a Test App</h2>')
})

app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
})