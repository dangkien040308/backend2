const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from users.users')
    return results
}
const getUser = async (id) => {
    let [results, fields] = await connection.query('select * from users.users where id = ? ',[id])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}
const updateUser = async (id,name,city,email) => {
    let [results , fields] = await connection.query(
        `UPDATE users.users 
        SET name = ? , city = ? , email = ?
        WHERE id = ? ; `,[name,city,email,id],
    )
}
const deleteUser = async(id) => {
    let [results , fields] = await connection.query(
        `DELETE FROM users.users WHERE id = ?`,[id]
    )
}
module.exports = {getAllUsers , getUser ,updateUser,deleteUser}