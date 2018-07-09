import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import reducers from 'app/reducers';
import layersReducer from 'app/ducks/layers';
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
  combineReducers({
    ...reducers,
    layers: layersReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
