import * as actions from './explore-actions'
import { ofPath, get, set } from 'js-lenses'

export default {
  [actions.toggleFold]: (state, { payload }) => {
    const $fold = ofPath(payload)
    const newState = { isOpen: !get($fold, state).isOpen }
    return set($fold, newState, state)
  },
  [actions.toggleValue]: (state, { payload }) => {
    const $value = ofPath(payload)
    const newState = !get($value, state)
    return set($value, newState, state)
  }
}
