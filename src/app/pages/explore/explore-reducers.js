import * as actions from './explore-actions'
import first from 'lodash/first'
import differenceBy from 'lodash/differenceBy'
import { ofPath, get, set } from 'js-lenses'

const pick = (o, k) => o[k] || o

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
  },
  [actions.updateOpacity]: (state, { payload: { path, value } }) => {
    const $path = ofPath(...path)
    return set($path, value, state)
  },
  [actions.switchScreenMode]: (states, { payload }) => {
    const $path = ofPath('screenMode')
    const state = get($path, states)
    const options = pick(state, 'options')
    const selected = pick(state, 'selected')

    const otherOpion = first(differenceBy(options, [{ key: selected }], 'key'))

    const value = {
      ...state,
      selected: pick(otherOpion, 'key')
    }

    return set($path, value, state)
  }
}
