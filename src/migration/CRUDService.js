const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from users')
    return results
}
const getUser = async (id) => {
    let [results, fields] = await connection.query('select * from users where id = ? ',[id])
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
module.exports = {getAllUsers , getUser ,updateUser}