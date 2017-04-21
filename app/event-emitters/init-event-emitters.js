module.exports = InitEventEmitters

// Initialize all of our apps event emitters in one place
function InitEventEmitters (AppState, EventSink, show) {
  // create emitters object that pulls in place-emitter
  // what we want is an emitter that redirects page
  var emitters = {
    signup: require('../signup/signup-emitter.js')(AppState, EventSink, show)
  }

  // attach emitter to the state
  AttachEmitters(AppState, emitters)
}
// for each property of emitters
// set the state with new emitter
function AttachEmitters (AppState, emitters) {
  Object.keys(emitters).forEach(function (emitterName) {
    AppState.set('emitters.' + emitterName, emitters[emitterName])
  })
}
