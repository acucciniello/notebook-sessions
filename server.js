const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/html', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3001, function () {
  console.log('listening on 3000')
})

