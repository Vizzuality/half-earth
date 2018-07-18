import * as actions from './layers-actions';

const setLayerUrl = (state, action) => {
  const { url, id } = action.payload;
  const layer = state.byId[id];
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: { ...layer, url }
    }
  };
};

const setLayerVisibility = (state, action) => {
  const { visible, id } = action.payload;
  const layer = state.byId[id];
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: { ...layer, config: { ...layer.config, visible } }
    }
  };
};

export default {
  [actions.setLayerUrl]: setLayerUrl,
  [actions.setLayerVisibility]: setLayerVisibility
};
