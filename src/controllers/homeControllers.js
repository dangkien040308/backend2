const connection = require('../config/database')
const {getAllUsers , getUser , updateUser ,deleteUser} = require('../migration/CRUDService')
const User = require('../model/User')

const getHome = async (req,res) => {
    let results = await User.find({})
    return res.render('home.ejs',{listUsers : results})
}
const getUsers = (req,res) => {
    return res.render('users.ejs')
}
const getUpdateUsers = async (req,res) => {
    let userID = req.params.id
    let userInfor = await User.findById(userID)
    return res.render('edit.ejs',{user : userInfor})
}
const CreateUser = async (req,res) => {
    
    let name = req.body.name 
    let email = req.body.email 
    let city = req.body.city 

    await User.create({
        name,
        email,
        city
    })
    // let [results , fields] = await connection.query(
    //     `INSERT INTO users.users(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
    // )

    res.send('Created Successfully !')

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
    
    await User.updateOne({_id : id}, {name : name , email : email , city : city})
    
    
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
    let userInfor = await User.findById(userID)
    res.render('delete.ejs',{user : userInfor})
}
const DeleteUser = async(req,res) => {
    let id = req.body.id
    const result = await User.findByIdAndDelete(id)
    console.log(result)
    res.redirect('/')
}

module.exports = { getHome , getAbout , getExplore ,CreateUser ,getUsers ,getUpdateUsers , UpdateUser , confirmDeleteUser , DeleteUser}