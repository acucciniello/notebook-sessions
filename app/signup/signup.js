var style = require('./signup_style.js')
var signup = require('./signup-function.js')
module.exports = {
  render: RenderSignup
}

function RenderSignup (h, state) {
  var signupStyle = style[state.viewport] || style.base
  var SignupEmitter = state.emitters.signup

  // create two text areas and a button in a div
  var signupLetters = h('p', {
    className: 'signupLetters'
  }, 'Signup Here!')
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
    value: 'Sign Up',
    className: 'signupButton',
    onclick: function () {
      signup(function (err, path) {
        if (err) {
          console.log(err)
        }
        SignupEmitter.emit('signupPath', path)
      })
    }
  }, 'Sign Up')

  var renderedSignup = h('div', {
    className: 'signup-box',
    style: signupStyle
  }, [signupLetters, emailBox, passwordBox, submitButton])
  return renderedSignup
}
