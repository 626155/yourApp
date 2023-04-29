const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login endpoint
router.post('/login', authController.login);

// Signup endpoint
router.post('/signup', authController.signup);

module.exports = router;