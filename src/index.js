const express = require('express')
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')
require('dotenv').config()

// config template engine

configViewEngine(app)

app.listen(process.env.PORT,(req,res) => {
    console.log('App listen on port ',process.env.PORT)
})
app.use('/api',webRoutes)

app.get('/',(req,res) => {
    res.render('home.ejs')
})