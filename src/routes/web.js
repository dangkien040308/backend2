const express = require('express')
const {getHome , getAbout , getExplore ,CreateUser , getUsers} = require('../controllers/homeControllers')
const router = express.Router()


router.get('/',getHome)
router.get('/users',getUsers)
router.post('/create-user',CreateUser)
router.get('/about',getAbout)
router.get('/explore',getExplore)
module.exports = router