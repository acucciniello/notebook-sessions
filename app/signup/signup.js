var style = require('./signup_style.js')
var signup = require('./signup-function.js')
module.exports = {
  render: RenderSignup
}

function RenderSignup (h, state) {
  var signupStyle = style[state.viewport] || style.base
  var SignupEmitter = state.emitters.signup

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
      signup(function (err, path) {
        if (err) {
          console.log(err)
        }
        SignupEmitter.emit('signupPath', path)
      })
    },
    style: {
      display: 'block'
    }
  }, 'Sign Up')

  var renderedSignup = h('div', {
    className: 'signup-box',
    style: signupStyle
  }, [emailBox, passwordBox, submitButton])
  return renderedSignup
}
