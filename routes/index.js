// route and file path variables
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.dustinRoute);
routes.get('/lodge', lesson1Controller.lodgeRoute);


module.exports = routes;