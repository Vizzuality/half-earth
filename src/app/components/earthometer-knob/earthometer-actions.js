import { createAction } from 'redux-tools'

export const setEarthSaved = createAction('setEarthSaved', null, payload => ({
  analytics: ['global', 'Change protection Coverage', `% protected ${payload}`]
}))
