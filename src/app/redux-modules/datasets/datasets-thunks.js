import { setDatasetsLoading, setDatasetsReady, setDatasetsError } from './datasets-actions';
import { parseCartoLayersToWRI } from './datasets-utils';
import CARTO from 'app/services/carto';

export async function fetchDatasetsThunk(dispatch, getState) {
  const { data } = getState().datasets;
  if (!data) {
    dispatch(setDatasetsLoading());
    try {
      const [ layers, datasets ] = await Promise.all([ CARTO.get('layers'), CARTO.get('datasets') ]);
      const parsedDatasets = parseCartoLayersToWRI(layers, datasets);
      dispatch(setDatasetsReady(parsedDatasets));
    } catch (e) {
      console.warn(e);
      dispatch(setDatasetsError(e));
    }
  }
}
