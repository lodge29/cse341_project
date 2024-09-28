const express = require('express');
const router = express.Router();

// week 1 lesson 1.1
// search /controllers/users
const usersController = require('../controllers/users');

// week 1 lesson 1.2
// GETs .functions from ./controller
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// week 2
// PUT, POST, DELETE
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

// EXPORT for use
module.exports = router;