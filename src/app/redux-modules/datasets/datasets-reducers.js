import * as actions from './datasets-actions';

export const initialState = {
  loading: false,
  error: false,
  data: null
};

function setDatasetsLoading(state) {
  return {
    ...state,
    loading: true
  };
}

function setDatasetsReady(state, { payload }) {
  return {
    ...state,
    loading: false,
    data: payload
  };
}

function setDatasetsError(state, { payload }) {
  return {
    ...state,
    loading: false,
    error: payload
  };
}

function setLayerVisibility(state, { payload }) {
  const { visible, id } = payload;
  const layer = state.byId[id];
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: { ...layer, config: { ...layer.config, visible } }
    }
  };
}

export default {
  [actions.setDatasetsLoading]: setDatasetsLoading,
  [actions.setDatasetsReady]: setDatasetsReady,
  [actions.setDatasetsError]: setDatasetsError,
  [actions.setLayerVisibility]: setLayerVisibility
};
