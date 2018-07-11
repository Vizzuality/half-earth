import { createAction, createThunkAction } from 'redux-tools';

export const enableLayerReady = createAction('layers/ENABLE_LAYER_READY');
export const enableLayer = createThunkAction(
  'layers/ENABLE_LAYER',
  layer => (dispatch, getState) => {
    console.log(
      'TODO: get carto layers url before enable it or just dispatch it when ready'
    );
    dispatch(enableLayerReady(layer));
  }
);
