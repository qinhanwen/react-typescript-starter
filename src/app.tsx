import React, { Suspense, useState } from 'react'
import './app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import router from './router'

const AppWrapper = (props: { children: JSX.Element }) => (
  <React.Suspense fallback={<div>fallback</div>}>{props.children}</React.Suspense>
)
class App extends React.Component<{}> {
  render() {
    const switchRoute = router.map((routeInfo) => {
      return <Route exact path={routeInfo.path} component={routeInfo.component} key={routeInfo.path} />
    })
    return (
      <AppWrapper>
        <Router>
          <Switch>{switchRoute}</Switch>
        </Router>
      </AppWrapper>
    )
  }
}

export default App
