import {
  setLayersLoading,
  setLayersReady,
  setLayersError
} from './datasets-actions';
import { parseCartoLayersToWRI } from './datasets-utils';
import CARTO from 'app/services/carto';

export async function fetchDatasetsThunk(dispatch) {
  dispatch(setLayersLoading());
  try {
    const [layers, datasets] = await Promise.all([
      CARTO.get('layers'),
      CARTO.get('datasets')
    ]);
    const parsedLayers = parseCartoLayersToWRI(layers, datasets);
    dispatch(setLayersReady(parsedLayers));
  } catch (e) {
    console.warn(e);
    dispatch(setLayersError(e));
  }
}
