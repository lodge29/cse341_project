// route variables
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

// create routes here, update ROUTE folder
routes.get('/', lesson1Controller.dustinRoute);
routes.get('/lodge', lesson1Controller.lodgeRoute);

// EXPORT
module.exports = routes;