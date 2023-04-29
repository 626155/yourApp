const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get all users endpoint
router.get('/', usersController.getAllUsers);

// Get user by id endpoint
router.get('/:id', usersController.getUserById);

// Create user endpoint
router.post('/', usersController.createUser);

// Update user endpoint
router.put('/:id', usersController.updateUser);

// Delete user endpoint
router.delete('/:id', usersController.deleteUser);

module.exports = router;