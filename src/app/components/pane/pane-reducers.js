import * as actions from './pane-actions'
import { get, ofPath, of, set, compose } from 'js-lenses'
import findIndex from 'lodash/findIndex'

export default {
  [actions.togglePane]: (state, { payload: { name, page } }) => {
    console.log(state)
    const $panes = ofPath(page, 'panes')

    const panes = get($panes, state)
    const currentIndex = findIndex(panes, { name })
    const $currentIsOpen = compose(
      ofPath(page, 'panes', currentIndex),
      of('isOpen')
    )

    return set($currentIsOpen, !get($currentIsOpen, state), state)
  },
  [actions.openPopup]: (state, { payload }) =>
    set(of('popup'), { open: true, selected: payload }, state),
  [actions.closePopup]: state =>
    set(of('popup'), { open: false, selected: null }, state)
}
