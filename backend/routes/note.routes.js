const express = require('express')
const router = express.Router()
const noteControllers = require('../controllers/note.controllers')
const auth = require('../middlewares/auth')

router.post('/', auth, noteControllers.createNote)

module.exports = router