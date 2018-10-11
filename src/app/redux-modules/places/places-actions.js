import { createAction } from 'redux-tools';

export const setPlacesLoading = createAction('places/SET_PLACES_LOADING');
export const setPlacesReady = createAction('places/SET_PLACES_READY');
export const setPlacesError = createAction('places/SET_PLACES_ERROR');
