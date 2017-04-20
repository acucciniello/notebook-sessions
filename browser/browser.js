// get the main div from 'cf-app'
var mountLocation = document.getElementById('cf-app')
// if it isnt there lets create it
if (!mountLocation) {
  mountLocation = document.createElement('div')
  mountLocation.id = 'cf-app'
  document.body.appendChild(mountLocation)
}

// requires cf-web-app.element
var cfAppElement = require('../app/cf-web-app.js')().element
// places it before the first child in mountLocation
mountLocation.insertBefore(cfAppElement, mountLocation.children[0])
