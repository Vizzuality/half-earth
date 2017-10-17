import { createAction } from 'redux-actions'

export const selectSelector = createAction('local:selectSelector')
export const toggleLayer = createAction('local:toggleLayer')
export const setSection = createAction('local:setSection')
export const resetLayers = createAction('local:resetLayers')
