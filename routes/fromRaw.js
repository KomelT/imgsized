const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
   console.log('Filename:' + req.files.foo.name)
   console.log('Mimetype:' + req.files.foo.mimetype)
   console.log('File size:' + req.files.foo.size)
   res.send('Ok')
})

module.exports = router
