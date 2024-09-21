const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT for token handling
const db = require("../models");
const { Account } = db;

const router = express.Router();

// Account creation route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await Account.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const account = await Account.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Account created successfully",
            user: {
                username: account.username,
                email: account.email
            }
        });

    } catch (error) {
        console.error("Error creating account:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const account = await Account.findOne({ where: { email } });
        if (!account) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, account.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // You can generate a token here if you're implementing JWT authentication
    // Generate JWT token
    const result = await jwt.sign({ id: account.account_id}, process.env.JWT_SECRET);
    console.log(account)
    res.json({ account: account, token: result.value });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// Profile route
router.get('/profile', async (req, res) => {
    try {
        // Assuming you're using JWT for authentication
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const accountId = decoded.id; // Assuming you have the user ID in the token

        const user = await Account.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({
            username: user.username,
            email: user.email,
            // Include any other relevant user info
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all accounts route (optional)
router.get('/', async (req, res) => {
    const accounts = await Account.findAll();
    res.json(accounts);
});

module.exports = router;
