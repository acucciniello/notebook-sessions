var login = require('./login-function.js')
var style = require('./login_style.js')

module.exports = {
  render: RenderLogin
}

function RenderLogin (h, state) {
  var loginStyle = style[state.viewport] || style.base
  var LoginEmitter = state.emitters.login
  // create two text areas and a button in a div
  var emailBox = h('input', {
    type: 'text',
    name: 'email',
    id: 'email',
    placeholder: 'Email'
  }, 'email')
  var passwordBox = h('input', {
    type: 'text',
    name: 'password',
    id: 'password',
    placeholder: 'Password'
  }, 'password')
  var submitButton = h('button', {
    type: 'button',
    value: 'Log In',
    onclick: function () {
      login(function (err, path) {
        if (err) {
          console.log(err)
        }
        LoginEmitter.emit('loginPath', path)
      })
    }
  }, 'Log In')

  var renderedLogin = h('div', {
    className: 'login-box',
    style: loginStyle
  }, [emailBox, passwordBox, submitButton])
  return renderedLogin
}
