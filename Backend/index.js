// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
// const PORT = process.env.PORT
const app = express();

// Express Settings

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
}


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Dinero!'
    })
})

// Controllers & Routes

app.use(express.urlencoded({ extended: false }))

app.use('/transactions', require('./controllers/transactions'))
app.use('/authentication', require('./controllers/authentication'))
app.use('/accounts', require('./controllers/accounts'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})