const User = require('../model/User')
const {uploadSingleFile ,uploadMultipleFile} = require('../service/fileUpload')
const getUsersAPI = async (req,res) => {
    let results = await User.find({})
    res.status(200).json({
        errorCode : 0,
        users : results
    })
}

const createUserAPI = async (req,res) => {
    let name = req.body.name 
    let email = req.body.email 
    let city = req.body.city 

    const result = await User.create({
        name,
        email,
        city
    })
    // let [results , fields] = await connection.query(
    //     `INSERT INTO users.users(name,email,city) VALUES(?,?,?)`,[req.body.name,req.body.email,req.body.city],
    // )

    res.status(201).json({
        errorCode : 0 ,
        user : result
    })
}
const putUsersAPI =  async(req,res) => {
    let id = req.body.id
    let name = req.body.name 
    let email = req.body.email
    let city = req.body.city
    
    const user = await User.updateOne({_id : id}, {name : name , email : email , city : city})
    if (user) {
    return res.status(200).json({
        errorCode : 0 ,
        data : user
    })
    } else {
        return res.status(500).json({
            errorCode : 1 ,
        })
    }
}
const deleteUser = async(req,res) => {
    let id = req.body.id
    const result = await User.findByIdAndDelete(id)
    console.log(result)
    return res.status(200).json({
        errorCode : 0 ,
        data : result
    })
}
const postUploadFile = async (req,res) => {
    let uploadedFiles = await req.files.image
    let result = Array.isArray(uploadedFiles) ? await uploadMultipleFile(uploadedFiles) : await uploadSingleFile(uploadedFiles);
    console.log('Result : ',result)
    res.send('ok')
}
module.exports = {getUsersAPI, createUserAPI, putUsersAPI, deleteUser,postUploadFile}