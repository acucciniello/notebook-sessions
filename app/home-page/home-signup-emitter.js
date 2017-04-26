var EventEmitter = require('events').EventEmitter
var Redirect = require('../redirect/redirect.js')

module.exports = InitHomeSignupEmitter

function InitHomeSignupEmitter (AppState, EventSink, show) {
  var HomeSignupEmitter = new EventEmitter()
  HomeSignupEmitter.addListener('homeSignupPath', Redirect.bind(null, AppState))

  return HomeSignupEmitter
}
