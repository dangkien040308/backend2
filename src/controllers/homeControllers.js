const connection = require('../config/database')
const {getAllUsers , getUser , updateUser ,deleteUser} = require('../migration/CRUDService')

const getHome = async (req,res) => {
    let results = await getAllUsers()
    return res.render('home.ejs',{listUsers : results})
}
const getUsers = (req,res) => {
    return res.render('users.ejs')
}
const getUpdateUsers = async (req,res) => {
    let userID = req.params.id
    let userInfor = await getUser(userID)
    return res.render('edit.ejs',{user : userInfor})
}
const CreateUser = async (req,res) => {
    // connection.query(
    //     `INSERT INTO users.users(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
    //     function(err,results) {
    //         console.log(results)

    //         res.send('Create successfully !')
    //     }
    // )

    let [results , fields] = await connection.query(
        `INSERT INTO users.infor(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
    )
    res.redirect('/')

}
const UpdateUser = async (req,res) => {
    // connection.query(
    //     `INSERT INTO users.users(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
    //     function(err,results) {
    //         console.log(results)

    //         res.send('Create successfully !')
    //     }
    // )
    let id = req.body.id
    let name = req.body.name 
    let email = req.body.email
    let city = req.body.city
    
    await updateUser(id,name,city,email)
    
    
    res.redirect('/')

}
const getAbout = (req,res) => {
    res.send('ABout')
}

const getExplore = (req,res) => {
    res.render('home.ejs')
}

const confirmDeleteUser = async(req , res) => {
    let userID = req.params.id
    let userInfor = await getUser(userID)
    res.render('delete.ejs',{user : userInfor})
}
const DeleteUser = async(req,res) => {
    let id = req.body.id
    await deleteUser(id)
    res.redirect('/')
}

module.exports = { getHome , getAbout , getExplore ,CreateUser ,getUsers ,getUpdateUsers , UpdateUser , confirmDeleteUser , DeleteUser}