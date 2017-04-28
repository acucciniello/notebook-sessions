require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
var pg = require('pg')
var bodyParser = require('body-parser')
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
  app.set('postgresClient', myClient)
})

app.set('superSecret', process.env.SECRET)

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.static('browser'))
app.use(require('./router'))

