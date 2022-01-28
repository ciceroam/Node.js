const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const path = require('path')
const mongoose = require('mongoose')

// Configs
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set("views", "./views")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://usersapp:usersapp@cluster0.sypsg.mongodb.net/UsersApp?retryWrites=true&w=majority').then(() => {
    console.log("MongoDB connected!")
}).catch((err) => {
    console.log("Error: "+err)
})

// Routes
app.get('/', function(req, res) {
    res.send("Home!")
})

app.use('/users', userRoutes)

// start
app.listen(8080, () => { 
    console.log("Server online!")
})