const express = require('express')
const app = express()
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewEngine')
const connection = require('./config/database')
require('dotenv').config()
const hostname = 'localhost'
// config template engine

// default options
app.use(fileUpload());

configViewEngine(app);

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
// define route for web
app.use('/',webRoutes)
// define route for api
app.use('/v1/api/',apiRoutes)



const serverRunning = async () => {
  try {
    await connection() 
    app.listen(process.env.PORT,hostname,() => {
        console.log('App listen on port ',process.env.PORT)
    })
  } catch(error) {
    console.log('Error : ',error)
  }
}

serverRunning()

// connection()
// app.listen(process.env.PORT,hostname,() => {
//           console.log('App listen on port ',process.env.PORT)
// })
