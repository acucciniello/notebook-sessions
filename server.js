const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('client/build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(3000, function () {
  console.log('listening on 3000')
})

