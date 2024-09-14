const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');  

// Create a new Transaction (POST)
router.post('/', async (req, res) => {
    try {
        const { userId, type, category, amount, date } = req.body;

        // Create a new transaction
        const transaction = await Transaction.create({
            userId,
            type,
            category,
            amount,
            date
        });

        res.status(201).json(transaction);  // Return the created transaction
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all Transactions (GET)
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.findAll();  // Fetch all transactions
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific Transaction by ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByPk(id);  // Fetch a transaction by primary key (id)
        
        if (transaction) {
            res.status(200).json(transaction);
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Transaction by ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, type, category, amount, date } = req.body;

        // Find the transaction
        const transaction = await Transaction.findByPk(id);

        if (transaction) {
            // Update the transaction
            await transaction.update({
                userId,
                type,
                category,
                amount,
                date
            });

            res.status(200).json(transaction);
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a Transaction by ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find the transaction
        const transaction = await Transaction.findByPk(id);

        if (transaction) {
            // Delete the transaction
            await transaction.destroy();
            res.status(204).json();  // 204 No Content, as the resource has been deleted
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
