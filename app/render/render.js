var h = require('virtual-dom/h')
var viewRouter = require('../router/view-router.js')

module.exports = RenderApp

function RenderApp (state) {
  var match = viewRouter.match(state.path)
  if (match) {
    state.params = match.params
    return match.fn(h, state)
  }
  return '404'
}
