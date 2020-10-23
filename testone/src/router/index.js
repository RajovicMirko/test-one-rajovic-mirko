import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// PAGES
import Error404 from '../views/Error404'
import Gists from '../views/Gists'

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={ Gists } />
      <Route exact path="/gists" component={ Gists } />
      <Route exact path="/error404" component={ Error404 } />
      <Redirect to="/error404" />
    </Switch>
  )
}
