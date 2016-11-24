const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, () => {
  console.log('listening on 3000')
})

