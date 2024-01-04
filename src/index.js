const express = require('express')
const app = express()
const webRoutes = require('./routes/web')
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
require('dotenv').config()

// config template engine

configViewEngine(app)


app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

app.listen(process.env.PORT,(req,res) => {
    console.log('App listen on port ',process.env.PORT)
})
app.use('/',webRoutes)

