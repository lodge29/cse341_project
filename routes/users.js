const express = require('express');
const router = express.Router();

// week 1 lesson 1.1
// search /controllers/users
const usersController = require('../controllers/users');

// week 1 lesson 1.2
// GETs .functions from ./controller
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// EXPORT for use
module.exports = router;