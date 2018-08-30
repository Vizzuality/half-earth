import * as actions from './categories-actions';

export const initialState = {
  loading: false,
  error: false,
  data: null
};

function setCategoriesLoading(state) {
  return {
    ...state,
    loading: true
  };
}

function setCategoriesReady(state, { payload }) {
  return {
    ...state,
    loading: false,
    data: payload
  };
}

function setCategoriesError(state, { payload }) {
  return {
    ...state,
    loading: false,
    error: payload
  };
}

export default {
  [actions.setCategoriesLoading]: setCategoriesLoading,
  [actions.setCategoriesReady]: setCategoriesReady,
  [actions.setCategoriesError]: setCategoriesError
};
