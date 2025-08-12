const asyncHandler = require('express-async-handler')
const validationSchema = require('../middlewares/validationSchema')
const bcrypt = require('bcrypt')
const pool = require('../config/db')

const registerUser = asyncHandler(async (req, res) => {
    const value = await validationSchema.userSchema.validateAsync(req.body)
    const {username, password} = value

    const [rows] = await pool.query(`
        SELECT * FROM users WHERE username=?
        `, [username])
    if (rows.length > 0) {
        const err = new Error('User already exists')
        err.status = 409
        throw err
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const [result] = await pool.query(`
        INSERT INTO users (username, password)
        VALUES (?, ?)
        `, [username, hashedPassword])

    res.json({
        id: result.insertId,
        username,
        password
    })
})

module.exports = {
    registerUser
}