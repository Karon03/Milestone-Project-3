const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { Account } = db

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const account = await Account.create({ 
        ...rest, 
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(account)
})

router.get('/', async (req, res) => {
    const accounts = await User.findAll()
    res.json(accounts)
})

module.exports = router