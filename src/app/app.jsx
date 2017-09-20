import React, { createElement } from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import { AnimatedRoute } from 'react-router-transition'
import 'app/styles/global.scss'

import { assign } from 'utils'
import store, { history } from 'app/store'
import routes from 'app/routes'
import Layout from 'app/layout'

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          {routes.map(route =>
            createElement(
              route.animated ? AnimatedRoute : Route,
              assign(route, { key: route.key || route.path })
            )
          )}
        </Layout>
      </Router>
    </Provider>
  )
}
