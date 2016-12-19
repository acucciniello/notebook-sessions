const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var pg = require('pg')
var format = require('pg-format')
var getTimeStamp = require('./get-timestamp.js')
var timestamp = getTimeStamp()
var thought
var config = {
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}
var pool = new pg.Pool(config)

pool.connect(function (err, client, done) {
  if (err) console.log(err)
  app.listen(3000, function () {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())

app.use(cors())

app.use(express.static('client/build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.post('/', function (req, res) {
  thought = req.body
  thought = "'" + thought + "'"
  res.end('done')
  console.log('We received this from the client: ' + thought)
  var textToDB = format('INSERT INTO thoughtentries VALUES(%s, %s);', timestamp, thought)
  client.query(textToDB, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
    client.end(function (err) {
      if (err) throw err
    })
  })
  return
})
