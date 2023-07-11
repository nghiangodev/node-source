const express = require('express')
const path = require('path');

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/about', (req, res) => {
    res.send(`I'm Anthony!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})