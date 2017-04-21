var xhr = require('xhr')
module.exports = loginFunction

function loginFunction (cb) {
  var logInInfo = {
    'email': ' ',
    'password': ' '
  }
  var token = ''
  var uid = ''
  logInInfo.email = document.getElementById('email').value
  logInInfo.password = document.getElementById('password').value
  xhr.post('/login', {json: logInInfo}, function (err, resp) {
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
