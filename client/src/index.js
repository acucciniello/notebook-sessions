import React from 'react'
import { render } from 'react-dom'
import Thoughts from './modules/Thoughts'
import { Router, Route, hashHistory } from 'react-router'
import Login from './modules/Login'
import SignUp from './modules/SignUp'

render((<Router history={hashHistory}>
  <Route path='/thoughts' component={Thoughts} />
  <Route path='/login' component={Login} />
  <Route path='/' component={SignUp} />
</Router>
), document.getElementById('root'))
