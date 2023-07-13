import express from "express";
import homeController from '../controllers/HomeController';
import aboutController from '../controllers/AboutController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)

    router.get('/about', aboutController.getAboutPage)

    return app.use('/', router)
}

export default initWebRoute;