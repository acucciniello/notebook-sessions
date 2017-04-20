var xhr = require('xhr')
module.exports = thoughtsFunction

function thoughtsFunction () {
  var data = {
    'token': '',
    'text': '',
    'userid': ''
  }
  data.text = document.getElementById('ThoughtBox').value
  data.token = window.sessionStorage.getItem('token')
  data.userid = window.sessionStorage.getItem('userid')
  xhr.post('/thoughts', {json: data}, function (err, resp) {
    if (err) {
      return console.log(err)
    }
    console.log(resp)
  })
  return
}

