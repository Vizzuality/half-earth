import * as actions from './places-actions';

export const initialState = { loading: false, error: false, data: null };

function setPlacesLoading(state) {
  return { ...state, loading: true };
}

function setPlacesReady(state, { payload }) {
  return { ...state, loading: false, data: payload };
}

function setPlacesError(state, { payload }) {
  return { ...state, loading: false, error: payload };
}

export default {
  [actions.setPlacesLoading]: setPlacesLoading,
  [actions.setPlacesReady]: setPlacesReady,
  [actions.setPlacesError]: setPlacesError
};
