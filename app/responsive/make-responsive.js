var viewport = require('ergonomic-viewport')
var window = require('global/window')

module.exports = HandleWindowResize

function HandleWindowResize (cb) {
  cb(null, viewport(window.innerWidth))

  window.addEventListener('resize', function () {
    cb(null, viewport(window.innerWidth))
  })
}
