import { createAction, createThunkAction } from 'redux-tools';
import CARTO from 'app/services/carto';

export const fetchCellDetailFail = createAction('cellsDetail/FETCH_DATA_FAIL');
export const fetchCellDetailReady = createAction('cellsDetail/FETCH_DATA_READY');

export const fetchCellDetail = createThunkAction('cellsDetail/FETCH_DATA', id => async dispatch => {
  try {
    const response = await CARTO.getDetail(id);
    const data = response.reduce(
      (acc, next) => ({ ...acc, [next.taxa]: { ...next, species: next.species ? next.species.split(',') : [] } }),
      {}
    );
    dispatch(fetchCellDetailReady({ id, data }));
  } catch (e) {
    console.warn(e);
    dispatch(fetchCellDetailFail(e));
  }
});
