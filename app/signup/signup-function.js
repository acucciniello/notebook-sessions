var xhr = require('xhr')
module.exports = signupFunction

function signupFunction (cb) {
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
      cb(null, '/thoughts')
    }
  })
  return
}
