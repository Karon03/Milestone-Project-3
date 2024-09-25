const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');

// Create a new Transaction (POST)
router.post('/', async (req, res) => {
    try {
        const { account_id, type, category, amount, date } = req.body;

        // Check for missing fields
        if (!account_id || !type || !category || !amount || !date) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a new transaction
        const transaction = await Transaction.create({
            account_id,
            type,
            category,
            amount,
            date,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.status(201).json(transaction);  // Return the created transaction
    } catch (error) {
        console.error('Error creating transaction:', error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
});

// Get all Transactions for a specific account (GET)
router.get('/account/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;
        if (!account_id) {
            return res.status(400).json({ error: 'Account ID is required.' });
        }

        const transactions = await Transaction.findAll({
            where: { account_id }
        });

        if (transactions.length === 0) {
            return res.status(404).json({ error: 'No transactions found for this account.' });
        }

        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
});

// Get a specific Transaction by ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByPk(id);
        
        if (transaction) {
            res.status(200).json(transaction);
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        console.error('Error fetching transaction:', error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
});

// Update a Transaction by ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { account_id, type, category, amount, date } = req.body;

        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        await transaction.update({
            account_id,
            type,
            category,
            amount,
            updatedAt: date 
        });

        res.status(200).json(transaction);
    } catch (error) {
        console.error('Error updating transaction:', error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
});

// Delete a Transaction by ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const transaction = await Transaction.findByPk(id);

        if (transaction) {
            await transaction.destroy();
            res.status(204).json();  // 204 No Content
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        console.error('Error deleting transaction:', error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;