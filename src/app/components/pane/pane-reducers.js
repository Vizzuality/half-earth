import * as actions from './pane-actions'
import { get, ofPath, of, set } from 'js-lenses'
import find from 'lodash/find'
import differenceBy from 'lodash/differenceBy'

export default {
  [actions.togglePane]: (state, { payload: { name, page } }) => {
    const $panes = ofPath(page, 'panes')
    const $isOpen = of('isOpen')

    const panes = get($panes, state)
    const currentPane = find(panes, { name })
    const otherPanes = differenceBy(panes, [currentPane], 'name')
    const pane = set($isOpen, !get($isOpen, currentPane), currentPane)
    return set($panes, otherPanes.concat(pane), state)
  }
}
