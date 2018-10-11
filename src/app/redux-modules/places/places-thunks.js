import CARTO from 'app/services/carto';
import { setPlacesLoading, setPlacesReady, setPlacesError } from './places-actions';

export async function fetchPlacesThunk(dispatch, getState) {
  const { data } = getState().places;
  if (!data) {
    dispatch(setPlacesLoading());
    try {
      const places = await CARTO.get('places');
      dispatch(setPlacesReady(places));
    } catch (e) {
      console.warn(e);
      dispatch(setPlacesError(e));
    }
  }
}
