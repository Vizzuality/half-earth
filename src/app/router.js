import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';

import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';
import { layersThunk } from 'redux-modules/layers/layers-thunks';
const history = createHistory();

export const MAP = 'location/MAP';
export const APP = 'location/APP';

export const routes = {
  [MAP]: {
    path: '/map',
    page: 'map-layout',
    thunk: layersThunk
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
