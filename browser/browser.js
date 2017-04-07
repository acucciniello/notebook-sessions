var router = require('../client/router/router.js')
var createElement = require('virtual-dom/create-element')
var h = require('virtual-dom/h')

console.log(router.match('/login'))
var loginRoute = router.match('/login')
var tree = loginRoute.fn(h)

console.log(tree)
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
