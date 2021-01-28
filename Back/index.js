require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var movieRoutes = require('./controllers/moviesController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(8000,()=>console.log('Server started at : 8000'))


app.use('/movies',movieRoutes)