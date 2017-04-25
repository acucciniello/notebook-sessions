// var login = require('./login-function.js')
var style = require('./home-page_style.js')

module.exports = {
  render: RenderHome
}

function RenderHome (h, state) {
  var homePageStyle = style[state.viewport] || style.base
  // var LoginEmitter = state.emitters.login
  // create two text areas and a button in a div
  var top = h('p', {
  }, 'notebook-sessions')
  var topDiv = h('div', {
    className: 'topdiv',
    id: 'myTopDiv'
  }, [top])
  var nbImage = h('img', {
    className: 'nb',
    src: 'https://s3.amazonaws.com/notebook-sessions/notebook_sessions.jpeg',
    alt: 'notebook picture'
  }, 'notebook-picture')
  var bottom = h('p', {
  }, 'Write Down Your Problems with a Worry in the World')
  var bottomDiv = h('div', {
    className: 'bottomdiv',
    id: 'myBottomDiv'
  }, [bottom])
  var renderedHome = h('div', {
    className: 'homepage',
    style: homePageStyle
  }, [topDiv, nbImage, bottomDiv])
  return renderedHome
}
