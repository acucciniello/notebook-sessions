var EventEmitter = require('events').EventEmitter
var Redirect = require('../redirect/redirect.js')

module.exports = InitSignupEmitter

function InitSignupEmitter (AppState, EventSink, show) {
  var SignupEmitter = new EventEmitter()
  SignupEmitter.addListener('signupPath', Redirect.bind(null, AppState))

  return SignupEmitter
}
