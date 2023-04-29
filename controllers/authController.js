const User = require('../models/user');
require('dotenv').config();

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find user by username
        const users = await User.findByUsername(username,password);
        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ status: true, data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Internal server error' });
    }
};


exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if user with same username already exists
        const existingUser = await User.checkUsernameAlreadyExist(username);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Username already taken' });
        }
        // Create new user
        const newUser = new User({ username, email, password });
        const result = await User.create(newUser);
        res.status(201).json({ message: 'User created', data: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};