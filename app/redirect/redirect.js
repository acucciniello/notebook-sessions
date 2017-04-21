module.exports = Redirect

function Redirect (AppState, path) {
  AppState.set('path', path)
  return
}
