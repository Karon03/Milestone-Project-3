// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Controllers & Routes
app.use('/api/transactions', require('./controllers/transact'))
app.use('/api/authentication', require('./controllers/authentication'))
app.use('/api/accounts', require('./controllers/accounts'))

// Serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get(['/', '/login', '/dashboard'], (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

// ROOT
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Dinero!'
    })
})

// Listen for Connections
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})