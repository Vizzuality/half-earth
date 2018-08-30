import {
  setDatasetsLoading,
  setDatasetsReady,
  setDatasetsError
} from './datasets-actions';
import { parseCartoLayersToWRI } from './datasets-utils';
import CARTO from 'app/services/carto';

export async function fetchDatasetsThunk(dispatch) {
  dispatch(setDatasetsLoading());
  try {
    const [layers, datasets] = await Promise.all([
      CARTO.get('layers'),
      CARTO.get('datasets')
    ]);
    const parsedLayers = parseCartoLayersToWRI(layers, datasets);
    dispatch(setDatasetsReady(parsedLayers));
  } catch (e) {
    console.warn(e);
    dispatch(setDatasetsError(e));
  }
}
