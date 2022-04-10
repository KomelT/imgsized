// Modules / Functions import
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const fileUpload = require('express-fileupload')
const { checkEnv, randomStr } = require('./helper')

// Welcome message
console.log('Hello from ImgSized API!')

// Check and set environment variables
console.log('.env check:')
checkEnv('IMGSIZED_MAX_UPLOAD_SIZE', 20, 'MB')
checkEnv('IMGSIZED_FILE_TTL', 3600, 's')
checkEnv('IMGSIZED_API_KEYS', randomStr(30), '')
checkEnv('IMGSIZED_APP_PUBLIC_DOMAIN', 'http://localhost/', '')
checkEnv('IMGSIZED_APP_PORT', 3000, '')

// Middlewares
app.use(fileUpload())

// Import routes
const fromRaw = require('./routes/fromRaw')
const download = require('./routes/download')

app.use('/fromRaw', fromRaw)
app.use('/download', download)

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './frontend/index.html'))
})

app.listen(process.env.IMGSIZED_APP_PORT, () => {
   console.log(`APP is listening on ${process.env.IMGSIZED_APP_PORT}`)
})
