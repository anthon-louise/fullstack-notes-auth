const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/users', userRoutes)

app.use(errorHandler)

module.exports = app