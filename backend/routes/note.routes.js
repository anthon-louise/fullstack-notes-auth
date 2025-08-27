const express = require('express')
const router = express.Router()
const noteControllers = require('../controllers/note.controllers')
const auth = require('../middlewares/auth')

router.post('/', auth, noteControllers.createNote)
router.get('/', auth, noteControllers.getNotes)
router.delete('/:id', auth, noteControllers.deleteNote)
router.put('/:id', auth, noteControllers.updateNote)
router.get('/:id', auth, noteControllers.getNoteById)

module.exports = router