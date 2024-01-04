const connection = require('../config/database')

const getHome = (req,res) => {
    // let users = []
    // connection.query (
    //     'SELECT * FROM users.users;' ,
    //     function(err,results,fields){
    //        users = results
    //        if(err) {
    //         console.log(err)
    //        } else {
    //        console.log('>> results',results)
    //        console.log('>> check user ',users)
    //        res.send(JSON.stringify(users))
    //        }
    //     }
    // )
     return res.render('home.ejs')
}
const getUsers = (req,res) => {
    return res.render('users.ejs')
}
const CreateUser = (req,res) => {
    console.log(req.body)
    connection.query(
        `INSERT INTO users.users(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
        function(err,results) {
            console.log(results)

            res.send('Create successfully !')
        }
    )
}
const getAbout = (req,res) => {
    res.send('ABout')
}

const getExplore = (req,res) => {
    res.render('home.ejs')
}

module.exports = { getHome , getAbout , getExplore ,CreateUser ,getUsers}