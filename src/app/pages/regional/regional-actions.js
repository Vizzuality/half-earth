import { createAction, createThunkAction } from 'redux-tools';

const { fetch } = window;

export const selectRegionalSelector = createAction('selectRegionalSelector', null, ({ selection }) => ({
  analytics: [ 'regional', 'Change species on map', `Change to ${selection}` ]
}));

export const toggleRegionalLayer = createAction('toggleRegionalLayer', null, ({ name }) => {
  const text = [ 'road-building', 'urban-development' ].includes(name)
    ? 'Change Human activities on the map'
    : 'Change protection type';
  return { analytics: [ 'regional', text, name ] };
});

export const setRegionalSection = createAction('setRegionalSection');
export const setRegionalSectionThunk = createThunkAction('setRegionalSectionThunk', type => (dispatch, getState) => {
  const { section } = getState().section;
  dispatch(setRegionalSection({ type, section }));
});
export const setType = createAction('setType');
export const setTypeThunk = createThunkAction('setTypeThunk', type => (dispatch, getState) => {
  const { section } = getState().section;
  dispatch(setType({ type, section }));
});

export const openPopup = createAction('openPopup');
export const closePopup = createAction('closePopup');

export const openSidePopup = createAction('openSidePopup', ({ meta, payload }) => payload, ({ meta }) => meta);

export const closeSidePopup = createAction('closeSidePopup');

export const toggleFilters = createAction('toggleFilters');
export const gotBillboards = createAction('gotBillboards');
export const getBillboards = createThunkAction('getBillboards', payload => dispatch => {
  return fetch('https://half-earth.carto.com/api/v2/sql?q=select%20*%20from%20public.reserves_centroids')
    .then(d => d.json())
    .then(d => dispatch(gotBillboards(d.rows)));
});

export const setLayerOpacity = createAction('setLayerOpacity');
export const togglePane = createAction('togglePane');
export const hideLayers = createAction('hideLayers');
