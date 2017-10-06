import * as actions from './section-actions'

export default {
  [actions.setSection]: (state, { payload }) => ({ ...state, section: payload })
}
