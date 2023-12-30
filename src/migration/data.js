const mysql = require('mysql2')
const { createConnection } = require('mysql2/promise')

const data = createConnection({
    database
})