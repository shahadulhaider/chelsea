import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './Hoc/Layout'
import Home from './Components/home'

const routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default routes
