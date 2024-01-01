const express = require('express')
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
require('dotenv').config()

// config template engine

configViewEngine(app)

// query

app.listen(process.env.PORT,(req,res) => {
    console.log('App listen on port ',process.env.PORT)
})
app.use('/be',webRoutes)

app.get('/',(req,res) => {
    res.render('home.ejs')
})