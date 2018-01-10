import PaneComponent from './pane-component'
import { connect } from 'react-redux'

import reducers from './pane-reducers'
import * as actions from './pane-actions'
import initialState from './pane-initial-state'

const mapStateToProps = (state, { page }) => {
  const { layers } = state[page]
  const { panes } = state.pane[page]

  return {
    layers,
    panes,
    page
  }
}

export { actions, reducers, initialState }
export default connect(mapStateToProps, actions)(PaneComponent)
