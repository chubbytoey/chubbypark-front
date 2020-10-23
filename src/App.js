import React, { Suspense , useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'

function App () {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]}  />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('CHUBBYPARK')(App)
