const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');

const { Account } = db; 

// Login route (POST /)
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the account by email
        const account = await Account.findOne({
            where: { email: email }
        });
        console.log(account)
        // Check if the account exists and the password is correct
        if (!account || !await bcrypt.compare(password, account.password)) {
            return res.status(404).json({ message: 'Could not find an account with the provided email and password' });
        }

        // Generate JWT token
        const result = await jwt.encode(process.env.JWT_SECRET, { id: account.account_id });
    
        res.json({ account: account, token: result.value });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: error.message });
    }
});

// Profile route (GET /profile)
router.get('/profile', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
           console.log(authHeader)
            return res.status(401).json({ message: 'Unauthorized' });
            
        }
        
        const token = authHeader.split(' ')[1];

        // Decode the JWT token
        const result = await jwt.decode(process.env.JWT_SECRET, token);
        if (result.error) {
             console.log(result)
            return res.status(401).json({ message: 'Invalid token' });
        }
        
        const { id } = result.value;

        // Find the account by ID
        const account = await Account.findOne({
            where: { account_id: id }
        });

        if (account) {
            res.json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (err) {
        console.error('Error fetching user profile:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
