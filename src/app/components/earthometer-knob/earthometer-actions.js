import { createAction } from 'redux-actions'

export const setEarthSaved = createAction('setEarthSaved', null, payload => ({
  analytics: ['global', 'Change protection Coverage', `% protected ${payload}`]
}))
