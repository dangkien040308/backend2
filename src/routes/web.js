const express = require('express')
const {getHome , getAbout , getExplore ,CreateUser , getUsers, getUpdateUsers, UpdateUser , confirmDeleteUser ,DeleteUser} = require('../controllers/homeControllers')
const router = express.Router()


router.get('/',getHome)
router.get('/users',getUsers)
router.get('/update/:id',getUpdateUsers)

router.post('/create-user',CreateUser)
router.post('/update-user',UpdateUser)
router.post('/delete-user/:id',confirmDeleteUser)
router.post('/delete-user',DeleteUser)

router.get('/about',getAbout)
router.get('/explore',getExplore)
module.exports = router