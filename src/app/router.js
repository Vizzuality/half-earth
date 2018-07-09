import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import querySerializer from 'query-string';
import MapLayoutComponent from 'app/layout/map-layout';
import AppLayoutComponent from 'app/layout/app-layout';

const history = createHistory();

export const APP = 'location/APP';
export const MAP = 'location/HOME';

export const routes = {
  [MAP]: {
    path: '/map',
    component: MapLayoutComponent
  },
  [APP]: {
    path: '/:section?',
    component: AppLayoutComponent
  },
  [NOT_FOUND]: {
    path: '/404',
    thunk: dispatch => dispatch(redirect({ type: APP }))
  }
};

export default connectRoutes(history, routes, {
  querySerializer
});
