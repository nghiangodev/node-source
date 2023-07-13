import express from "express";
import homeController from '../controllers/HomeController.js';
import aboutController from '../controllers/AboutController.js';

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomepage)

    router.get('/about', aboutController.getAboutPage)

    return app.use('/', router)
}

export default initWebRoute;