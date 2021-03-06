import CARTO from 'app/services/carto';
import { setCategoriesLoading, setCategoriesReady, setCategoriesError } from './categories-actions';

export async function fetchCategoriesThunk(dispatch, getState) {
  const { data } = getState().datasets;
  if (!data) {
    dispatch(setCategoriesLoading());
    try {
      const categories = await CARTO.get('categories');
      dispatch(setCategoriesReady(categories));
    } catch (e) {
      console.warn(e);
      dispatch(setCategoriesError(e));
    }
  }
}
