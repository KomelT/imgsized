// Modules / Functions import
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const fileUpload = require('express-fileupload')
const { checkEnv, randomStr } = require('./helper')

// Welcome message
console.log('Hello from ImgSized API!')
console.log('.env check:')

// Check and set environment variables
checkEnv('IMGSIZED_MAX_UPLOAD_SIZE', 20, 'MB')
checkEnv('IMGSIZED_FILE_TTL', 3600, 's')
checkEnv('IMGSIZED_API_KEYS', randomStr(30), '')
checkEnv('IMGSIZED_APP_PORT', 3000, '')

// Middleware
app.use(fileUpload())

// Import routes
const fromRaw = require('./routes/fromRaw')
app.use('/fromRaw', fromRaw)
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './frontend/index.html'))
})

app.listen(process.env.IMGSIZED_APP_PORT, () => {
   console.log(`APP is listening on ${process.env.IMGSIZED_APP_PORT}`)
})
