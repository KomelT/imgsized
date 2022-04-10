const express = require('express')
const router = express.Router()
const { exec } = require('child_process')
const fs = require('fs')

router.post('/', (req, res) => {
   let files = []
   req.files.foo.forEach((el) => {
      files.push({
         origName: el.name,
         origSize: el.size,
         errMessage: [],
         done: false,
      })
   })

   req.files.foo.forEach((el, i) => {
      fs.writeFile('./data/' + el.name, Buffer.from(el.data, 'hex'), (err) => {
         if (err) {
            files[i].errMessage.push('Error while uploading files to server!')
            files[i].done = true
         }
      })
   })

   console.log('Done uploading!')

   files.forEach((el, i) => {
      if (el.errMessage.length == 0) {
         const command = 'rawtherapee-cli -Y -c ./data/' + el.origName
         exec(command, (error, stdout, stderr) => {
            if (error || stderr) {
               console.log(`stderr: ${stderr}`)
               console.log(`stderr: ${error}`)
               files[i].errMessage.push(
                  'Error while converting from RAW to JPG!'
               )
               files[i].done = true
            } else {
               console.log(`stdout: ${stdout}`)
               files[i].done = true
            }
         })
      }
   })
   let count = 0
   const inte = setInterval(() => {
      if (files.length == count) {
         clearInterval(inte)
         files.forEach((el, i) => {
            delete files[i].done
         })
         res.send(files)
      }
      count = 0
      files.forEach((el) => {
         if (el.done) count++
      })
   })
})

module.exports = router
