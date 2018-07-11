import * as actions from './layers-actions';

const addLayer = state => ({
  state,
  byId: {
    ...state.byId,
    [Date.now()]: ''
  }
});

export default {
  [actions.addLayer]: addLayer
};
