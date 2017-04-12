var xhr = require('xhr')
module.exports = signupFunction

function signupFunction () {
  var singUpInfo = {
    'email': ' ',
    'password': ' '
  }
  var token = ''
  var uid = ''
  singUpInfo.email = document.getElementById('email').value
  singUpInfo.password = document.getElementById('password').value
  xhr.post('/signup', {json: singUpInfo}, function (err, resp) {
    if (err) {
      console.log(err)
    }
    token = resp.body.token
    uid = resp.body.userid
    window.sessionStorage.setItem('token', token)
    window.sessionStorage.setItem('userid', uid)
    if (token !== undefined && uid !== undefined) {
      const path = 'http://localhost:3000/thoughts'
      console.log('go to ' + path)
      // TODO: redirect to /thoughts
    }
  })
  return
}

