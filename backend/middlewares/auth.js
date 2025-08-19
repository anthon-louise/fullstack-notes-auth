const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}