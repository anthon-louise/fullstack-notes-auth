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

const getNotes = asyncHandler(async (req, res) => {
    const {userId} = req.user

    const [rows] = await pool.query(`
        SELECT * FROM notes WHERE user_id=?
        `, [userId])

    res.json({
        notes: rows,
        message: 'Notes fetched',
        success: true
    })
})

const deleteNote = asyncHandler(async (req, res) => {
    const value = await validationSchema.idSchema.validateAsync(req.params)
    const noteId = value.id
    const {userId} = req.user

    const [rows] = await pool.query(`
        SELECT * FROM notes WHERE id=? AND user_id=?
        `, [noteId, userId])
    if (rows.length === 0) {
        const err = new Error('Note not found')
        err.status = 404
        throw err
    }
    
    await pool.query(`
        DELETE FROM notes WHERE id=? AND user_id=?
        `, [noteId, userId])
    res.json({
        message: 'Deleted successfully',
        success: true
    })
})

module.exports = {
    createNote,
    getNotes,
    deleteNote
}