import { createAction } from 'redux-actions'

export const openSidebar = createAction('openSidebar')
export const closeSidebar = createAction('closeSidebar')
export const toggleSidebar = createAction(
  'toggleSidebar',
  ({ meta, ...payload }) => payload,
  ({ meta }) => meta
)
