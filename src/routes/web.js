const express = require('express')

const router = express.Router()


router.get('/',(req,res) => {
    res.send('Home')
})
router.get('/about',(req,res) => {
    res.send('About')
})
router.get('/explore',(req,res) => {
    res.send('Expolre')
})
module.exports = router