const express = require('express')
const apiRouter = express.Router()
const {getUsersAPI,createUserAPI,putUsersAPI,deleteUser,postUploadFile} = require('../controllers/apiControllers')
const User = require('../model/User')

apiRouter.get('/users',getUsersAPI)
apiRouter.post('/users',createUserAPI)
apiRouter.put('/users',putUsersAPI)
apiRouter.delete('/users',deleteUser)
apiRouter.post('/file',postUploadFile)

module.exports = apiRouter