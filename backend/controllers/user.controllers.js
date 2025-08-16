const asyncHandler = require('express-async-handler')
const validationSchema = require('../middlewares/validationSchema')
const bcrypt = require('bcrypt')
const pool = require('../config/db')
const jwt = require('jsonwebtoken')

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

    await pool.query(`
        INSERT INTO users (username, password)
        VALUES (?, ?)
        `, [username, hashedPassword])

    res.json({
        message: 'User created success',
        success: true
    })
})

const loginUser = asyncHandler(async (req, res) => {
    const value = await validationSchema.userSchema.validateAsync(req.body)
    const {username, password} = value

    const [rows] = await pool.query(`
        SELECT * FROM users WHERE username=?
        `, [username])
    if (rows.length === 0) {
        const err = new Error('User does not exists')
        err.status = 404
        throw err
    }

    const isValid = await bcrypt.compare(password, rows[0].password)
    if (!isValid) {
        const err = new Error('Wrong password')
        err.status = 400
        throw err
    }

    const token = jwt.sign(
        {userId: rows[0].id},
        process.env.SECRET,
        {expiresIn: '1h'}
    )

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
    })

    res.json({
        message: 'User loginned successfully',
        success: true
    })
})



module.exports = {
    registerUser,
    loginUser
}