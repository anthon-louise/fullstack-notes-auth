const mysql = require('mysql2/promise')
require('dotenv').config()

const pool = mysql.createPool({
    user: process.env.USER,
    database: process.env.NAME,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

async function initializeDB() {
    try {
        const connection = await pool.getConnection()

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) UNIQUE,
                password VARCHAR(255)
            )
            `)

        await connection.query(`
            CREATE TABLE IF NOT EXISTS notes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255),
                content TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                user_id INT,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
            `)


        console.log('Database connected')
        connection.release()
    } catch (err) {
        throw new Error(`Initializing database failed: ${err.message}`)
    }
}

initializeDB()

module.exports = pool