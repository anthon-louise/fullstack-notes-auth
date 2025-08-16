const express = require('express')
const userControllers = require('../controllers/user.controllers')
const router = express.Router()

router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)

module.exports = router