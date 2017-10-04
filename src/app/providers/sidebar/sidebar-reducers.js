import * as actions from './sidebar-actions'

export default {
  [actions.openSidebar]: (state, { payload }) => ({ ...state, open: true }),
  [actions.closeSidebar]: (state, { payload }) => ({ ...state, open: false }),
  [actions.toggleSidebar]: (state, { payload }) => ({
    ...state,
    open: !state.open
  })
}
