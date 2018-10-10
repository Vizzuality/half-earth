import * as actions from './pledges-actions';

export const initialState = { loading: false, error: false, data: null };

function setPledgesLoading(state) {
  return { ...state, loading: true };
}

function setPledgesReady(state, { payload }) {
  const data = payload
    .map(item => ({ id: item.cartodbId, ...JSON.parse(item.stAsgeojson) }))
    .map(item => ({ id: item.id, lon: item.coordinates[0], lat: item.coordinates[1] }));
  return { ...state, loading: false, data };
}

function setPledgesError(state, { payload }) {
  return { ...state, loading: false, error: payload };
}

export default {
  [actions.setPledgesLoading]: setPledgesLoading,
  [actions.setPledgesReady]: setPledgesReady,
  [actions.setPledgesError]: setPledgesError
};
