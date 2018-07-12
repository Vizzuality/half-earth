import { createStore, applyMiddleware, compose } from 'redux';
import router from './router';

import thunk from 'redux-thunk';
import reducers from 'app/reducers';
import { middleware as analyticsMiddleware } from 'providers/analytics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, router.middleware, analyticsMiddleware.trackEvents];

export default createStore(
  reducers,
  composeEnhancers(router.enhancer, applyMiddleware(...middlewares))
);
