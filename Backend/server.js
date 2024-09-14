// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to (Name In Progress)'
    })
})

// Controllers & Routes

app.use(express.urlencoded({ extended: false }))

// app.use('/transactions', require('./controllers/transactions'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/accounts', require('./controllers/accounts'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})