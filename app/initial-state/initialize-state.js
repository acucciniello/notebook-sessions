var extend = require('xtend')
var SS = require('solid-state')

module.exports = InitializeState

var defaultState = {
  path: require('global/document').location.pathname,
  emitters: {}
}

function InitializeState (initialState) {
  initialState = extend(defaultState, initialState)
  var AppState = new SS(initialState)
  return AppState
}
