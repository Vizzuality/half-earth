import { createAction, createThunkAction } from 'redux-tools';
import { getCartoUrl } from './layers-utils';

export const setLayerConfig = createAction('layers/SET_CONFIG');
export const fetchLayer = createThunkAction(
  'layers/FETCH_CARTO_URL',
  ({ id, config }) => async (dispatch, getState) => {
    const layerData = getState().layers.byId[id];

    if (layerData) {
      const url = await getCartoUrl({ config: layerData.carto });
      const layerConfig = {
        id,
        config: {
          ...config,
          url
        }
      };
      dispatch(setLayerConfig(layerConfig));
    }
  }
);
