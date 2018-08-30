import { createAction } from 'redux-tools';

export const setDatasetsLoading = createAction('datasets/SET_LAYERS_LOADING');
export const setDatasetsReady = createAction('datasets/SET_LAYERS_READY');
export const setDatasetsError = createAction('datasets/SET_LAYERS_ERROR');

export const setLayerVisibility = createAction('datasets/SET_LAYER_VISIBILITY');
