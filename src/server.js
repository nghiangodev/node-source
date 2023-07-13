import express from 'express'
import configViewEngine from './configs/view_engine.js';
import dotenv from 'dotenv/config'
import initWebRoute from './routes/web.js'

const app = express()
const port = process.env.PORT || 8000

//set up view engine
configViewEngine(app)

//init web route
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})