const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("user/listuser")
})

router.get('/add', (req, res) => {
    res.render("user/adduser")
})

router.post('/new', (req, res) => {
    res.send(req.body.name)
})

module.exports = router