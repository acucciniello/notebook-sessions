require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var pg = require('pg')
var format = require('pg-format')
var jwt = require('jsonwebtoken')
var getTimeStamp = require('./get-timestamp.js')
var timestamp = getTimeStamp()
var jsonParser = bodyParser.json()
// var textParser = bodyParser.text()
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
app.set('superSecret', process.env.SECRET)

app.use(express.static('browser'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/browser/index.html'))
})

app.post('/login', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  console.log(req)
  console.log('We received this from the client: ' + email + ' ' + password)
  var checkEmailInfo = format('SELECT * from accounts WHERE email = %L AND password = %L', email, password)
  myClient.query(checkEmailInfo, function (err, result) {
    if (err) {
      console.log(err)
    } else if (result.rowCount === 1) {
      console.log(result)
      var uid = result.rows[0].userid
      var token = jwt.sign(req.body, app.get('superSecret'))
      return res.json({
        success: true,
        message: 'Enjoy your token',
        userid: uid,
        token: token
      })
    }
    return res.end('done')
  })
})

app.post('/signup', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  console.log('We received this from the client: ' + email + ' ' + password)
  var checkEmailInfo = format('SELECT * from accounts WHERE email = %L AND password = %L', email, password)
  myClient.query(checkEmailInfo, function (err, result) {
    if (err) {
      console.log(err)
      res.end('done')
    } else if (result.rows[0] === undefined) {
      console.log('the user does not exist need to add user')
      var addUser = format('INSERT INTO accounts VALUES(%L, %L);', email, password)
      myClient.query(addUser, function (err, result) {
        if (err) {
          console.log(err)
          res.end('done')
        } else {
          var pullUID = format('SELECT * from accounts WHERE email = %L AND password = %L', email, password)
          myClient.query(pullUID, function (err, result) {
            if (err) {
              res.end('done')
            } else {
              var uid = result.rows[0].userid
              var token = jwt.sign(req.body, app.get('superSecret'))
              return res.json({
                success: true,
                message: 'Enjoy your token',
                userid: uid,
                token: token
              })
            }
          })
        }
      })
    } else {
      console.log('There is an account that exists with the email provided')
      return res.json({ error: 'There is an account that already exists with the email provided' })
    }
  })
  return
})

app.post('/thoughts', jsonParser, function (req, res, next) {
  var token = req.body.token
  var userid = req.body.userid
  if (token) {
    console.log('about to verify the token')
    jwt.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        console.log('token failed to verify')
        return res.json({success: false, message: 'Failed to authenticate token.'})
      } else {
        req.decoded = decoded
        console.log(req.decoded)
        next()
      }
    })
  } else {
    console.log('no token')
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
  thought = req.body.text
  thought = "'" + thought + "'"
  res.end('done')
  console.log('We received this from the client: ' + thought)
  console.log(userid)
  var textToDB = format('INSERT INTO thoughts VALUES(%s, %s, %s);', timestamp, thought, userid)
  myClient.query(textToDB, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
  return
})
