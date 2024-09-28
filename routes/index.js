const router = require('express').Router();

// week 2 swagger file
router.use('/', require('./swagger'));

// Week 1 - lesson 1.1
// gets ./controllers/lessos1 file
const lesson1Controller = require('../controllers/lesson1');

// week 1 lesson 1.1
// routes and pulls from ./controllers/lesson1 functions
router.get('/', lesson1Controller.dustinRoute);
router.get('/lodge', lesson1Controller.lodgeRoute);

// week 1 lesson 1.2
// routes to ./users.js
router.use('/users', require('./users'));

// EXPORT for use
module.exports = router;