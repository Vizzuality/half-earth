import * as actions from './map-actions'

// const showMammals = (state, { payload }) => ({ ...state })

export default {
  // [actions.toggleMammals]: (state, { payload }) => console.log(payload) || state,
  [actions.toggleMammals]: (state, { payload }) => console.log(state) || state
}
