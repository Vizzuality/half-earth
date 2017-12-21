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
  ({ name }) => {
    const text = ['road-building', 'urban-development'].includes(name)
      ? 'Change Human activities on the map'
      : 'Change protection type'
    return {
      analytics: ['regional', text, name]
    }
  }
)
export const setRegionalSection = createAction('setRegionalSection')
export const setType = createAction('setType')
