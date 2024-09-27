const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name, email, password, role });
        const token = generateToken(user._id, user.role);
        res.status(201).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user._id, user.role);
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
