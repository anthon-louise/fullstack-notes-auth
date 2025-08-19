const asyncHandler = require('express-async-handler')
const pool = require('../config/db')
const validationSchema = require('../middlewares/validationSchema')

const createNote = asyncHandler(async (req, res) => {
    const value = await validationSchema.noteSchema.validateAsync(req.body)
    const {title, content} = value
    const {userId} = req.user
    

    await pool.query(`
        INSERT INTO notes (title, content, user_id)
        VALUES (?, ?, ?)
        `, [title, content, userId])
    
    res.json({
        message: 'Note created',
        success: true
    })
})

module.exports = {
    createNote
}