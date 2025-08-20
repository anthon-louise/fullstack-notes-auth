const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/check', auth, (req, res) => {
    res.json({
        success: true,
        user: req.user
    })
})

module.exports = router