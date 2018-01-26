import * as actions from './interact-actions'

export default {
  [actions.setInteraction]: (state, { payload }) =>
    state.interaction !== payload
      ? {
        ...state,
        interaction: payload
      }
      : state
}
