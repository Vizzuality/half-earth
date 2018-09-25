import * as actions from './cell-detail-actions';

export const initialState = { data: null, loading: false, loaded: true, error: false };

const fetchCellDetail = state => ({ ...state, loading: true, loaded: false });

const fetchCellDetailFail = (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload });

const fetchCellDetailReady = (state, { payload }) => ({
  ...state,
  loading: false,
  loaded: true,
  data: { ...state.data, [payload.id]: payload.data }
});

export default {
  [actions.fetchCellDetail]: fetchCellDetail,
  [actions.fetchCellDetailFail]: fetchCellDetailFail,
  [actions.fetchCellDetailReady]: fetchCellDetailReady
};
