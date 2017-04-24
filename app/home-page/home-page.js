// var login = require('./login-function.js')
var style = require('./home-page_style.js')

module.exports = {
  render: RenderHome
}

function RenderHome (h, state) {
  var homePageStyle = style[state.viewport] || style.base
  // var LoginEmitter = state.emitters.login
  // create two text areas and a button in a div
  var nbImage = h('img', {
    className: 'nb',
    src: 'https://s3.amazonaws.com/notebook-sessions/notebook_sessions.jpeg',
    alt: 'notebook picture'
  }, 'notebook-picture')
  var renderedHome = h('div', {
    className: 'homepage',
    style: homePageStyle
  }, [nbImage])
  return renderedHome
}
