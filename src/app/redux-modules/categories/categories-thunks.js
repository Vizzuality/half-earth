import {
  setCategoriesLoading,
  setCategoriesReady,
  setCategoriesError
} from './categories-actions';
import CARTO from 'app/services/carto';

export async function fetchCategoriesThunk(dispatch) {
  dispatch(setCategoriesLoading());
  try {
    const categories = await CARTO.get('categories');
    dispatch(setCategoriesReady(categories));
  } catch (e) {
    console.warn(e);
    dispatch(setCategoriesError(e));
  }
}
