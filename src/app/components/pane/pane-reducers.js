import * as actions from './pane-actions'
import { get, ofPath, of, set, compose } from 'js-lenses'
import findIndex from 'lodash/findIndex'

export default {
  [actions.togglePane]: (state, { payload: { name, page } }) => {
    const $panes = ofPath(page, 'panes')

    const panes = get($panes, state)
    const currentIndex = findIndex(panes, { name })
    const $currentIsOpen = compose(
      ofPath(page, 'panes', currentIndex),
      of('isOpen')
    )

    return set($currentIsOpen, !get($currentIsOpen, state), state)
  },
  [actions.toggleLayer]: (state, { payload: { page, name } }) => {
    const $layers = compose(ofPath(page), of('layers'))
    const layers = get($layers, state)
    const currentIndex = findIndex(layers, { name })
    const $currentIsVisible = compose(
      ofPath(page, 'layers', currentIndex),
      of('visible')
    )

    return set($currentIsVisible, !get($currentIsVisible, state), state)
  },
  [actions.setLayerOpacity]: (state, { payload: { page, name, value } }) => {
    const $layers = compose(ofPath(page), of('layers'))
    const layers = get($layers, state)
    const currentIndex = findIndex(layers, { name })
    const $currentOpacity = compose(
      ofPath(page, 'layers', currentIndex),
      of('opacity')
    )

    return set($currentOpacity, value, state)
  }
}
