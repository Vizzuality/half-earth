import PaneComponent from './pane-component'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import identity from 'lodash/identity'
import find from 'lodash/find'
import kebabCase from 'lodash/kebabCase'
import last from 'lodash/last'
import { assign, pick } from 'app/utils'
import { actions as regionalActions } from 'pages/regional'
import { actions as globalActions } from 'pages/global'

import reducers from './pane-reducers'
import * as actions from './pane-actions'
import initialState from './pane-initial-state'

const addInfo = (data, infos) =>
  data.map(datum =>
    assign(datum, {
      info: pick(
        find(infos, { key: kebabCase(last(datum.name.split(':'))) }),
        'key'
      )
    })
  )

const mapStateToProps = (state, { page, ...props }) => {
  const { popup, opacities } = state.pane
  const { layers, panes, popups } = state[page]

  return {
    layers: addInfo(layers, popups),
    panes: addInfo(panes, popups),
    opacities,
    popup,
    selectedPopup: find(popups, { key: popup.selected }),
    page
  }
}

const mapDispatchToProps = (dispatch, { page }) => {
  // page dependent actions
  const toggleLayer =
    page === 'regional'
      ? regionalActions.toggleRegionalLayer
      : page === 'global' ? globalActions.toggleGlobalLayer : identity

  const setLayerOpacity =
    page === 'regional'
      ? regionalActions.setLayerOpacity
      : page === 'global' ? globalActions.setLayerOpacity : identity

  const togglePane =
    page === 'regional'
      ? regionalActions.togglePane
      : page === 'global' ? globalActions.togglePane : identity

  return bindActionCreators(
    { ...actions, toggleLayer, setLayerOpacity, togglePane },
    dispatch
  )
}

export { actions, reducers, initialState }
export default connect(mapStateToProps, mapDispatchToProps)(PaneComponent)
