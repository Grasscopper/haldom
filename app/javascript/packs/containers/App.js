import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CommunitiesIndexContainer from './CommunitiesIndexContainer'
import CommunitiesShowPage from '../components/CommunitiesShowPage'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CommunitiesIndexContainer} />
        <Route exact path="/communities" component={CommunitiesIndexContainer} />
        <Route exact path="/communities/:id" component={CommunitiesShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
