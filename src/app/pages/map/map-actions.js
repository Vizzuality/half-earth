import { createAction } from 'redux-actions'

export const toggleLayer = createAction('toggleLayer')
export const selectLayer = createAction('selectLayer')
export const selectLayers = createAction('selectLayers')
export const resetLayers = createAction('resetLayers')

export const showLayer = createAction('showLayer')
export const hideLayers = createAction('hideLayers')
