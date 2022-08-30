const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {errorHandler} = require('../backend/middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const app = express()

app.use(cors())

connectDB()

app.use(express.json())

app.use('/books', require('./routes/books'))

app.use(errorHandler)

app.listen(port, () => console.log(`server is running on port ${port}`))