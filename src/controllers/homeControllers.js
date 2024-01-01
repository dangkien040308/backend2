const connection = require('../config/database')

const getHome = (req,res) => {
    let users = []
    connection.query (
        'SELECT * FROM users.infor' ,
        function(err,results,fields){
           users = results
           if(err) {
            console.log(err)
           } else {
           console.log('>> results',results)
           console.log('>> check user ',users)
           res.send(JSON.stringify(users))
           }
        }
    )
     
}

const getAbout = (req,res) => {
    res.send('ABout')
}

const getExplore = (req,res) => {
    res.render('home.ejs')
}

module.exports = { getHome , getAbout , getExplore}