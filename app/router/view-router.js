var Router = require('routes')
var viewRouter = new Router()

// var HomePage = require('../home-page/home-page.js')
var LoginPage = require('../login/login.js')
var SignupPage = require('../signup/signup.js')
var ThoughtsPage = require('../thoughts/thoughts.js')

module.exports = viewRouter

viewRouter.addRoute('/login', LoginPage.render)
viewRouter.addRoute('/signup', SignupPage.render)
viewRouter.addRoute('/thoughts', ThoughtsPage.render)
// viewRouter.addRoute('/', HomePage.render)
