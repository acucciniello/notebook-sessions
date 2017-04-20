var login = require('./login-function.js')
var style = require('./login_style.js')

module.exports = {
  render: RenderLogin
}

function RenderLogin (h, state) {
  var loginStyle = style[state.viewport] || style.base
  // create two text areas and a button in a div
  var emailBox = h('input', {
    type: 'text',
    name: 'email',
    id: 'email',
    style: {
      display: 'block'
    }
  }, 'email')
  var passwordBox = h('input', {
    type: 'text',
    name: 'password',
    id: 'password',
    style: {
      display: 'block'
    }
  }, 'password')
  var submitButton = h('button', {
    type: 'button',
    value: 'Log In',
    onclick: function () {
      login()
    },
    style: {
      display: 'block'
    }
  }, 'Log In')

  var renderedLogin = h('div', {
    className: 'login-box',
    style: loginStyle
  }, [emailBox, passwordBox, submitButton])
  return renderedLogin
}
