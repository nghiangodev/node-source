import express from 'express'
import configViewEngine from './configs/view_engine.js';
import dotenv from 'dotenv/config'

const app = express()
const port = process.env.PORT || 8000

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send(`I'm Anthony!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})