import * as actions from './pledges-actions';

export const initialState = { loading: false, error: false, data: null };

function setPledgesLoading(state) {
  return { ...state, loading: true };
}

function setPledgesReady(state, { payload }) {
  return { ...state, loading: false, data: payload };
}

function setPledgesError(state, { payload }) {
  return { ...state, loading: false, error: payload };
}

export default {
  [actions.setPledgesLoading]: setPledgesLoading,
  [actions.setPledgesReady]: setPledgesReady,
  [actions.setPledgesError]: setPledgesError
};
