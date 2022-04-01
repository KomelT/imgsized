require('dotenv').config()
const { checkEnv, randomStr } = require('./helper');

console.log("Hello from ImgSized API!")
console.log(".env check:")

// Check and set environment variables
checkEnv("IMGSIZED_MAX_UPLOAD_SIZE", 20, "MB")
checkEnv("IMGSIZED_FILE_TTL", 3600, "s")
checkEnv("IMGSIZED_API_KEYS", randomStr(30), "")