import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import reducers from 'app/reducers';
import createHistory from 'history/createBrowserHistory';
import { middleware as analyticsMiddleware } from 'providers/analytics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createHistory();
const middlewares = [
  thunk,
  routerMiddleware(history),
  analyticsMiddleware.trackEvents
];

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
