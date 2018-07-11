import * as actions from './layers-actions';

const enableLayerReady = (state, { payload }) => ({
  ...state,
  byId: {
    ...state.byId,
    [payload.id]: {
      ...payload,
      active: true
    }
  }
});

export default {
  [actions.enableLayerReady]: enableLayerReady
};
