const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(newUser);
};

exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const updatedUser = { name, email, password };
    const user = await User.findByIdAndUpdate(req.params.id, updatedUser, { new: true });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};