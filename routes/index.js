// router variables
const router = require('express').Router();


// Week 1 - lesson 1.1
// must comment for routes/users.js to work

const lesson1Controller = require('../controllers/lesson1');

// routes to folder/function
router.get('/', lesson1Controller.dustinRoute);
router.get('/lodge', lesson1Controller.lodgeRoute);
router.use('/users', require('./users'));

// EXPORT for use
module.exports = router;