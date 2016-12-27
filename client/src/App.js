import React from 'react'
import { render } from 'react-dom'
import Thoughts from './modules/Thoughts'
import { Router, Route, hashHistory } from 'react-router'
import Login from './modules/Login'

render((<Router history={hashHistory}>
  <Route path='/' component={Thoughts} />
  <Route path='/login' component={Login} />
</Router>
), document.getElementById('root'))

