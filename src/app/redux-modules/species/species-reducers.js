import * as actions from './species-actions';

export const initialState = { data: null, loading: false, loaded: true, error: false };

const fetchSpecies = state => ({ ...state, loading: true, loaded: false });

const fetchSpeciesFail = (state, { payload }) => ({
  ...state,
  loading: false,
  loaded: false,
  error: payload
});

const fetchSpeciesReady = (state, { payload }) => ({
  ...state,
  loading: false,
  loaded: true,
  data: { ...state.data, ...payload }
});

export default {
  [actions.fetchSpecies]: fetchSpecies,
  [actions.fetchSpeciesFail]: fetchSpeciesFail,
  [actions.fetchSpeciesReady]: fetchSpeciesReady
};
