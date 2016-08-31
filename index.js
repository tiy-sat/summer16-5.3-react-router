import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './lib/App'
import Feed from './lib/Feed'
import Profile from './lib/Profile'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/feed" component={ Feed } />
      <Route path="/profile/:username" component={ Profile } />
    </Route>
  </Router>
), document.getElementById('app'))
