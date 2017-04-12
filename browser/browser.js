var router = require('../client/router/router.js')
var createElement = require('virtual-dom/create-element')
var h = require('virtual-dom/h')

console.log(document.location.href)

if (document.location.href === 'http://localhost:3000/login') {
  var loginRoute = router.match('/login')
  console.log(loginRoute.route)
  var tree = loginRoute.fn(h)
  var rootNode = createElement(tree)
  document.body.appendChild(rootNode)
} else if (document.location.href === 'http://localhost:3000/signup') {
  var signupRoute = router.match('/signup')
  console.log(signupRoute.route)
  tree = signupRoute.fn(h)
  rootNode = createElement(tree)
  document.body.appendChild(rootNode)
} else if (document.location.href === 'http://localhost:3000/signup') {
  var thoughtsRoute = router.match('/thoughts')
  console.log(thoughtsRoute.route)
  tree = thoughtsRoute.fn(h)
  rootNode = createElement(tree)
  document.body.appendChild(rootNode)
} else {
  console.log('404')
}

