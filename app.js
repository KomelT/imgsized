// Modules / Functions import
require('dotenv').config()
const express = require('express')
const app = express()
const { checkEnv, randomStr } = require('./helper')

// Welcome message
console.log('Hello from ImgSized API!')
console.log('.env check:')

// Check and set environment variables
checkEnv('IMGSIZED_MAX_UPLOAD_SIZE', 20, 'MB')
checkEnv('IMGSIZED_FILE_TTL', 3600, 's')
checkEnv('IMGSIZED_API_KEYS', randomStr(30), '')
