const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
// var pg = require('pg')
// var format = require('pg-format')
// var client = new pg.Client()
// var getTimeStamp = require('./get-timestamp.js')
// var timestamp = getTimeStamp

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())

app.use(cors())

app.use(express.static('client/build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.post('/', function (req, res) {
  var thought = req.body
  res.end('done')
  console.log('We received this from the client: ' + thought)
  /* client.connect(function (err) {
    if (err) throw err
    var textToDB = format('INSERT INTO thoughtentries VALUES(%L, %L)', timestamp, thought)
    client.query(textToDB, function (err, result) {
      if (err) throw err
      console.log(result.rows[0])
      client.end(function (err) {
        if (err) throw err
      })
    })
  }) */
  return
})

app.listen(3000, function () {
  console.log('listening on 3000')
})
