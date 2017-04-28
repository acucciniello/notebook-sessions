var express = require('express')
var router = new express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var getTimeStamp = require('./get-timestamp.js')
var timestamp = getTimeStamp()
const path = require('path')
var bcrypt = require('bcrypt')
var format = require('pg-format')
var jwt = require('jsonwebtoken')

var saltRounds = 10
var thought

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../browser/index.html'))
})

router.post('/login', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  var myClient = req.app.get('postgresClient')
  var getHashedPass = format('SELECT * from accounts WHERE email = %L', email)
  myClient.query(getHashedPass, function (err, result) {
    if (err) {
      console.log(err)
    } else if (result.rows[0] === undefined) {
      console.log('There is an account that exists with the email provided')
      return res.json({ error: 'There is no account that already exists with the email provided please sign in' })
    } else {
      var hash = result.rows[0].password
      bcrypt.compare(password, hash, function (err, response) {
        if (err) {
          console.log(err)
        } else if (response === true) {
          var uid = result.rows[0].userid
          var token = jwt.sign(req.body, req.app.get('superSecret'))
          return res.json({
            success: true,
            message: 'Enjoy your token',
            userid: uid,
            token: token
          })
        } else {
          return res.end('done')
        }
      })
    }
  })
})

router.post('/signup', jsonParser, function (req, res) {
  var email = req.body.email
  var password = req.body.password
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err)
    }
    var myClient = req.app.get('postgresClient')
    var checkEmailInfo = format('SELECT * from accounts WHERE email = %L', email)
    myClient.query(checkEmailInfo, function (err, result) {
      if (err) {
        console.log(err)
        res.end('done')
      } else if (result.rows[0] === undefined) {
        console.log('the user does not exist need to add user')
        var addUser = format('INSERT INTO accounts VALUES(%L, %L);', email, hash)
        myClient.query(addUser, function (err, result) {
          if (err) {
            console.log(err)
            res.end('done')
          } else {
            var pullUID = format('SELECT * from accounts WHERE email = %L AND password = %L', email, hash)
            myClient.query(pullUID, function (err, result) {
              if (err) {
                res.end('done')
              } else {
                var uid = result.rows[0].userid
                var token = jwt.sign(req.body, req.app.get('superSecret'))
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
})

router.post('/thoughts', jsonParser, function (req, res, next) {
  var token = req.body.token
  var userid = req.body.userid
  if (token) {
    jwt.verify(token, req.app.get('superSecret'), function (err, decoded) {
      if (err) {
        console.log('token failed to verify')
        return res.json({success: false, message: 'Failed to authenticate token.'})
      } else {
        req.decoded = decoded
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
  var myClient = req.app.get('postgresClient')
  var textToDB = format('INSERT INTO thoughts VALUES(%s, %s, %s);', timestamp, thought, userid)
  myClient.query(textToDB, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log('Thought was stored! ' + thought)
  })
  return
})

module.exports = router
