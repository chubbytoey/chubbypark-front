import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './utils/withHelmet'
import GlobalStyle from './components/GlobalStyle'
import ActionContext from './contexts/ActionContext'
import { useFilter } from './utils/useFilter'
function App () {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [
    {
      placeOptions,
      floorOption,
      selected,
      lots,
      isLoading,
      error,
      selectInputRef
    },
    { handleLocation, handleFloor }
  ] = useFilter()

  return (
    <ActionContext.Provider
      value={{
        placeOptions,
        floorOption,
        selected,
        lots,
        isLoading,
        error,
        selectInputRef,
        handleLocation,
        handleFloor
      }}
    >
      <GlobalStyle />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </ActionContext.Provider>
  )
}

export default withHelmet('CHUBBYPARK')(App)
