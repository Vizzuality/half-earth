import { createAction } from 'redux-tools';

export const toggleLayer = createAction('toggleLayer');
export const selectLayer = createAction('selectLayer');
export const selectLayers = createAction('selectLayers');
export const resetLayers = createAction('resetLayers');

export const showLayer = createAction('showLayer');
export const hideLayers = createAction('hideLayers');

export const setType = createAction('setType');
