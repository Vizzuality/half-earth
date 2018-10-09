import { connectRoutes, NOT_FOUND, redirect } from 'redux-first-router';

import createHistory from 'history/createBrowserHistory';
import querySerializer from 'qs';
import { fetchLayersThunk } from 'pages/map-iframe/map-iframe-thunks';
import { fetchDatasetsThunk } from 'redux-modules/datasets/datasets-thunks';
import { fetchCategoriesThunk } from 'redux-modules/categories/categories-thunks';
import { fetchStoriesThunk } from 'redux-modules/stories/stories-thunks';
import { fetchPlacesThunk } from 'redux-modules/places/places-thunks';

const history = createHistory();

export const MAP = 'location/MAP';
export const APP = 'location/APP';
export const APPv2 = 'location/APPv2';

const dispatchPreFetchThunks = (...thunks) =>
  async (...params) => thunks.forEach(thunk => thunk(...params));

export const routes = {
  [MAP]: { path: '/map', page: 'layout/embed-layout/embed-layout.js', thunk: fetchLayersThunk },
  [APPv2]: {
    path: '/v2',
    page: 'pages/root/root.js',
    thunk: dispatchPreFetchThunks(
      fetchDatasetsThunk,
      fetchCategoriesThunk,
      fetchStoriesThunk,
      fetchPlacesThunk
    )
  },
  [APP]: { path: '/:section?', page: 'layout/app-layout/app-layout.js' },
  [NOT_FOUND]: { path: '/404', thunk: dispatch => dispatch(redirect({ type: APP })) }
};

export default connectRoutes(history, routes, { querySerializer });
