import { createAction, createThunkAction } from 'redux-tools';
import MOL from 'app/services/mol';

export const fetchSpeciesFail = createAction('species/FETCH_DATA_FAIL');
export const fetchSpeciesReady = createAction('species/FETCH_DATA_READY');

export const fetchSpecies = createThunkAction('species/FETCH_DATA', species => async dispatch => {
  try {
    const response = await MOL.getSpecies(species);
    const data = response.reduce((acc, next) => ({ ...acc, [next.scientificname]: next }), {});
    dispatch(fetchSpeciesReady(data));
  } catch (e) {
    console.warn(e);
    dispatch(fetchSpeciesFail(e));
  }
});
