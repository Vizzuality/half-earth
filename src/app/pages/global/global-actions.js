import { createAction } from 'redux-actions'

export const setGlobalSection = createAction('setGlobalSection')
export const setWhereToProtectData = createAction('setWhereToProtectData')

export const selectGlobalSelector = createAction(
  'selectGlobalSelector',
  null,
  ({ selection }) => ({
    analytics: ['global', 'Change species on map', `Change to ${selection}`]
  })
)
export const toggleGlobalLayer = createAction(
  'toggleGlobalLayer',
  null,
  ({ name }) => ({
    analytics: ['global', 'Change Map Layer', name]
  })
)
