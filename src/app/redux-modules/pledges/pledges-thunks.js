import CARTO from 'app/services/carto';
import { setPledgesLoading, setPledgesReady, setPledgesError } from './pledges-actions';

export async function fetchPledgesThunk(dispatch, getState) {
  const { data } = getState().pledges;
  if (!data) {
    dispatch(setPledgesLoading());
    try {
      const stories = await CARTO.get('pledges');
      dispatch(setPledgesReady(stories));
    } catch (e) {
      console.warn(e);
      dispatch(setPledgesError(e));
    }
  }
}
