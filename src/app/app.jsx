import React, { createElement } from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'
import 'app/styles/global.scss'

import { assign } from 'utils'
import store, { history } from 'app/store'
import routes from 'app/routes'
import Layout from 'app/layout'

const NoMatch = props => <h1>404</h1>

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          {routes.map(route =>
            createElement(
              Route,
              assign(route, { key: route.key || route.path })
            )
          )}
          <Route component={NoMatch} />
        </Layout>
      </Router>
    </Provider>
  )
}
