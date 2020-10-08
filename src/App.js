import React, { Suspense } from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  height: 100vh;
  width: 100vw;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
`

function App () {
  return (
    <>
    <GlobalStyle/>
      <Router>
        <Suspense fallback="...loading">
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
