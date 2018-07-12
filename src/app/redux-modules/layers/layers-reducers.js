import * as actions from './layers-actions';

const setLayerConfig = (state, { payload }) => {
  const { id } = payload;
  const layer = { ...state.byId[id] };
  if (layer) {
    layer.config = {
      ...layer.config,
      ...payload.config
    };
  }
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: layer
    }
  };
};

export default {
  [actions.setLayerConfig]: setLayerConfig
};
