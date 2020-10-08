import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'

function App () {
  return (
    <Router>
      <Suspense>
        <Switch>
          {Object.keys(routes).map(routeKey => (
            <Route key={routeKey} {...routes[routeKey]} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
