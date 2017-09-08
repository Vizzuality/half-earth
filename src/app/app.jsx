import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'

import store, { history } from 'app/store'
import routes from 'app/routes'
import Layout from 'pages/layout'

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Layout>
      </Router>
    </Provider>
  )
}
