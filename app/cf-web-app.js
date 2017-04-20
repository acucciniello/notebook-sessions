// Temporary variable reference so that when our google map script loads
// we can start using the maps object. Without this `require('google')`
// would be undefined
// TODO: document this
require('global/window').google = {temporary: 'property'}
var makeResponsive = require('./responsive/make-responsive.js')
var initializeState = require('./initial-state/initialize-state.js')
var initSinglePageApp = require('./single-page/init-single-page-app.js')
var initRenderLoop = require('./render/init-render-loop.js')

module.exports = InitApp

// function initlializes app that is used in browser.js
function InitApp (initialState, onStateChange) {
  // sets the state to the initial state
  var AppState = initializeState(initialState)
  // creates a loop object with some inital state, render function + options
  var loop = initRenderLoop(AppState.get())
  // sets appElement to main loop root DOM element, this element will be inserted into the page
  var appElement = loop.target
  // register event handlers when there is a new state with loop.update
  AppState.addListener(loop.update)
  // set the viewport of the page
  makeResponsive(function (_, viewport) {
    AppState.set('viewport', viewport)
  })

  // _ is the way of not having err to be handled in the callback
  // sets the path for the new DOM and rerenders the page
  var show = initSinglePageApp(function (_, path) {
    AppState.set('path', path)
    loop.update(AppState.get())
  })

  require('catch-links')(appElement, show)

  return {
    element: appElement
  }
}
