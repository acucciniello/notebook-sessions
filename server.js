const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())

app.use(cors())

app.use(express.static('client/build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.post('/', function (req, res) {
  var thought = req.body.text
  console.log('We have received this from the client:' + thought)
})

app.listen(3000, function () {
  console.log('listening on 3000')
})

