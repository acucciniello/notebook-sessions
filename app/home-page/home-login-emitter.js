var EventEmitter = require('events').EventEmitter
var Redirect = require('../redirect/redirect.js')

module.exports = InitHomeLoginEmitter

function InitHomeLoginEmitter (AppState, EventSink, show) {
  var HomeLoginEmitter = new EventEmitter()
  HomeLoginEmitter.addListener('homeLoginPath', Redirect.bind(null, AppState))

  return HomeLoginEmitter
}
