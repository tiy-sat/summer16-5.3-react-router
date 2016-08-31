import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Feed from './lib/Feed'
import Profile from './lib/Profile'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Feed } />
    <Route path="/profile/:username" component={ Profile } />
  </Router>
), document.getElementById('app'))
