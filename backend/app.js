const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const noteRoutes = require('./routes/note.routes')
const authRoutes = require('./routes/auth')
const errorHandler = require('./middlewares/errorHandler')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/users', userRoutes)
app.use('/notes', noteRoutes)
app.use('/auth', authRoutes)

app.use(errorHandler)

module.exports = app