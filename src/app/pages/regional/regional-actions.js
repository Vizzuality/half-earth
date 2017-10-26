import { createAction } from 'redux-actions'

export const selectRegionalSelector = createAction(
  'selectRegionalSelector',
  null,
  ({ selection }) => ({
    analytics: ['regional', 'Change species on map', `Change to ${selection}`]
  })
)
export const toggleRegionalLayer = createAction(
  'toggleRegionalLayer',
  null,
  ({ name }) => ({
    analytics: ['regional', 'Change protection type', name]
  })
)
export const setRegionalSection = createAction('setRegionalSection')
