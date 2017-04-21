var EventEmitter = require('events').EventEmitter
var Redirect = require('../redirect/redirect.js')

module.exports = InitLoginEmitter

function InitLoginEmitter (AppState, EventSink, show) {
  var LoginEmitter = new EventEmitter()
  LoginEmitter.addListener('loginPath', Redirect.bind(null, AppState))

  return LoginEmitter
}
