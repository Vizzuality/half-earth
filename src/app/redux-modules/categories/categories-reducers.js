import { camelCase } from 'lodash';
import * as actions from './categories-actions';

export const initialState = { loading: false, error: false, data: null };

function setCategoriesLoading(state) {
  return { ...state, loading: true };
}

function setCategoriesReady(state, { payload }) {
  const camelCasedPayload = payload.map(category => {
    const camelCasedKeys = {};
    Object.keys(category).forEach(key => {
      camelCasedKeys[camelCase(key)] = category[key];
    });
    return camelCasedKeys;
  });
  return { ...state, loading: false, data: camelCasedPayload };
}

function setCategoriesError(state, { payload }) {
  return { ...state, loading: false, error: payload };
}

export default {
  [actions.setCategoriesLoading]: setCategoriesLoading,
  [actions.setCategoriesReady]: setCategoriesReady,
  [actions.setCategoriesError]: setCategoriesError
};
