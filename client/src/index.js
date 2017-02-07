import React from 'react'
import { render } from 'react-dom'
import Thoughts from './modules/Thoughts'
import { Router, Route, browserHistory } from 'react-router'
import Login from './modules/Login'
import SignUp from './modules/SignUp'

render((<Router history={browserHistory}>
  <Route path='/thoughts' component={Thoughts} />
  <Route path='/login' component={Login} />
  <Route path='/signup' component={SignUp} />
</Router>
), document.getElementById('root'))
