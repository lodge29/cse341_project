const express = require('express');
const router = express.Router();

//week 3: validation rules, validator
const validation = require('./validation/validation.js');

const { userValidationRules, validate } = require('./validation/validation.js')


// week 1 lesson 1.1
// search /controllers/users
const usersController = require('../controllers/users');

// week 1 lesson 1.2
// GET
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// week 2
// PUT, POST, DELETE

router.post('/',userValidationRules(), validate, usersController.createUser);

router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

// EXPORT for use
module.exports = router;