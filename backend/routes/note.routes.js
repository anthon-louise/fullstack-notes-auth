const express = require('express')
const router = express.Router()
const noteControllers = require('../controllers/note.controllers')
const auth = require('../middlewares/auth')

router.post('/', auth, noteControllers.createNote)
router.get('/', auth, noteControllers.getNotes)
router.delete('/:id', auth, noteControllers.deleteNote)

module.exports = router