const express = require('express');
const router = express.Router();

// search /controllers/users
const usersController = require('../controllers/users');

// GETs .functions
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// EXPORT for use
module.exports = router;