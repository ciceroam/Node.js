const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render("user/list")
})

router.get('/new', function(req, res) {
    res.render("user/form")
})

router.post('/add', function(req, res) {
    res.send(req.body.name)
})

module.exports = router