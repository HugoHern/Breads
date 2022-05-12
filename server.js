//DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES - landing page
app.get('/', (req, res) => {
    res.send('welcome to an awesome app about breads')
})

// 404 PAGE
app.get('*', (req, res) => {
    res.send('404')
})

// BREADS PAGE
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})