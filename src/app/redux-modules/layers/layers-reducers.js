import * as actions from './layers-actions';

const setLayerConfig = (state, { payload }) => {
  const { id } = payload;
  const layer = state.byId[id];
  if (layer) {
    const newLayer = {
      ...layer,
      config: {
        ...layer.config,
        ...payload.config
      }
    };
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: newLayer
      }
    };
  }
  return state;
};

export default {
  [actions.setLayerConfig]: setLayerConfig
};
