import PaneComponent from './pane-component'
import { connect } from 'react-redux'

import reducers from './pane-reducers'
import * as actions from './pane-actions'
import initialState from './pane-initial-state'

const mapStateToProps = (state, { page }) => {
  const { popUp, opacities } = initialState
  const { layers, panes } = state[page]

  return {
    layers,
    popUp,
    panes,
    opacities,
    page
  }
}

export { actions, reducers, initialState }
export default connect(mapStateToProps, actions)(PaneComponent)
