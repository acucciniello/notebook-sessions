var Router = require('routes')
var router = new Router()

// var SignUp = require('../signup/signup.js')
var LogIn = require('../login/login.js')
// var Thoughts = require('../thoughts/thoughts.js')

module.exports = router

// viewRouter.addRoute('/signup', SignUp.render)
router.addRoute('/login', LogIn.render)
// viewRouter.addRoute('/thoughts', Thoughts.render)
