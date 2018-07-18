import { createAction, createThunkAction } from 'redux-tools';
import { getCartoUrl } from './layers-utils';

export const fetchLayer = createThunkAction(
  'layers/FETCH_CARTO_URL',
  ({ id, carto }) => async dispatch => {
    const url = await getCartoUrl({ carto });
    dispatch(setLayerUrl({ id, url }));
  }
);

export const setLayerUrl = createAction('setLayerUrl');
export const setLayerVisibility = createAction('setLayerVisibility');
