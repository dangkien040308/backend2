const express = require('express')
const {getHome , getAbout , getExplore} = require('../controllers/homeControllers')
const router = express.Router()


router.get('/',getHome)
router.get('/about',getAbout)
router.get('/explore',getExplore)
module.exports = router