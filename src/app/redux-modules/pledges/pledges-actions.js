import { createAction } from 'redux-tools';

export const setPledgesLoading = createAction('pledges/SET_PLEDGES_LOADING');
export const setPledgesReady = createAction('pledges/SET_PLEDGES_READY');
export const setPledgesError = createAction('pledges/SET_PLEDGES_ERROR');
