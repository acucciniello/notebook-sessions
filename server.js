require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var pg = require('pg')
var format = require('pg-format')
var getTimeStamp = require('./get-timestamp.js')
var timestamp = getTimeStamp()
var jsonParser = bodyParser.json()
var textParser = bodyParser.text()
var thought
var config = {
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}
var pool = new pg.Pool(config)
var myClient

pool.connect(function (err, client, done) {
  if (err) console.log(err)
  app.listen(3000, function () {
    console.log('listening on 3000')
  })
  myClient = client
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use(express.static('client/build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.post('/login', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  res.end('done')
  console.log('We received this from the client: ' + email + ' ' + password)
  var checkEmailInfo = format('SELECT * from accounts WHERE email = %L AND password = %L', email, password)
  myClient.query(checkEmailInfo, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result.rows[0].userid)
    myClient.end(function (err) {
      if (err) throw err
    })
  })
  return
})

app.post('/signup', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  res.end('done')
  console.log('We received this from the client: ' + email + ' ' + password)
  var checkEmailInfo = format('SELECT * from accounts WHERE email = %L AND password = %L', email, password)
  myClient.query(checkEmailInfo, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result.rows[0] === undefined) {
      console.log('the user does not exist need to add user')
      var addUser = format('INSERT INTO accounts VALUES(%L, %L, %L);', email, password, 234767)
      myClient.query(addUser, function (err, result) {
        if (err) {
          console.log(err)
        }
        console.log(result)
      })
    }
    myClient.end(function (err) {
      if (err) throw err
    })
  })
  return
})

app.post('/', textParser, function (req, res) {
  thought = req.body
  thought = "'" + thought + "'"
  res.end('done')
  console.log('We received this from the client: ' + thought)
  var textToDB = format('INSERT INTO thoughtentries VALUES(%s, %s, %L);', timestamp, thought, 1234546)
  myClient.query(textToDB, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
    myClient.end(function (err) {
      if (err) throw err
    })
  })
  return
})
