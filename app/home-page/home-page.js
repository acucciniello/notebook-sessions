// var login = require('./login-function.js')
var style = require('./home-page_style.js')

module.exports = {
  render: RenderHome
}

function RenderHome (h, state) {
  var homePageStyle = style[state.viewport] || style.base
  var HomeLoginEmitter = state.emitters.homeLogin
  var HomeSignupEmitter = state.emitters.homeSignup

  var top = h('p', {
    className: 'nb-sess'
  }, 'notebook-sessions')

  var br = h('br', {})
  var signup = h('button', {
    type: 'button',
    value: 'Sign Up',
    className: 'homeSignupButton',
    onclick: function () {
      HomeSignupEmitter.emit('homeSignupPath', '/signup')
    }
  }, 'Sign Up')

  var login = h('button', {
    type: 'button',
    value: 'Log In',
    className: 'homeLoginButton',
    onclick: function () {
      HomeLoginEmitter.emit('homeLoginPath', '/login')
    }
  }, 'Log In')

  var buttonsDiv = h('div', {
    className: 'buttonsDiv'
  }, [signup, br, login])

  var bottom1 = h('p', {
    className: 'motto1'
  }, 'Write Down Your Problems')

  var bottom2 = h('p', {
    className: 'motto2'
  }, 'Without a Worry in the World')

  var bottomDiv = h('div', {
    className: 'bottomDiv'
  }, [bottom1, br, bottom2])

  var renderedHome = h('div', {
    className: 'homepage',
    style: homePageStyle
  }, [top, buttonsDiv, bottomDiv])

  return renderedHome
}
