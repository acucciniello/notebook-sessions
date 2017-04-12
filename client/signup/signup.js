// var style = require('./login_style.js')

// var h = require('virtual-dom/h')

var signup = require('./signup-function.js')
module.exports = {
  render: RenderSignup
}

function RenderSignup (h) {
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
    value: 'Sign Up',
    onclick: function () {
      signup()
    },
    style: {
      display: 'block'
    }
  }, 'Sign Up')

  var renderedSignup = h('div', {
    className: 'signup-box'
  }, [emailBox, passwordBox, submitButton])
  return renderedSignup
}
