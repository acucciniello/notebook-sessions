module.exports = Redirect

function Redirect (AppState, path) {
  AppState.set('path', path)
  window.history.pushState({}, '', path)
  console.log(AppState)
  return
}
