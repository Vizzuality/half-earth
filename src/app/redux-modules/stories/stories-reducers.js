import * as actions from './stories-actions';

export const initialState = { loading: false, error: false, data: null };

function setStoriesLoading(state) {
  return { ...state, loading: true };
}

function setStoriesReady(state, { payload }) {
  return { ...state, loading: false, data: payload };
}

function setStoriesError(state, { payload }) {
  return { ...state, loading: false, error: payload };
}

export default {
  [actions.setStoriesLoading]: setStoriesLoading,
  [actions.setStoriesReady]: setStoriesReady,
  [actions.setStoriesError]: setStoriesError
};
