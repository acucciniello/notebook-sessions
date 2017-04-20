var main = require('main-loop')
var render = require('./render.js')
var vdom = require('virtual-dom')

module.exports = InitRenderLoop

function InitRenderLoop (startState) {
  startState = startState || {}
  var loop = main(startState, render, vdom)
  return loop
}
