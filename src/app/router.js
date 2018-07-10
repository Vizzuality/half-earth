import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';
const history = createHistory();

export const APP = 'location/APP';
export const MAP = 'location/HOME';

export const routes = {
  [MAP]: {
    path: '/map',
    page: 'map-layout'
  },
  [APP]: {
    path: '/:section?',
    page: 'app-layout'
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: dispatch => dispatch(redirect({ type: APP }))
  }
};

export default connectRoutes(history, routes, {
  querySerializer
});
