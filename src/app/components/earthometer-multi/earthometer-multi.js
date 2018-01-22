import { connect } from 'react-redux'

import EarthoMulti from './earthometer-multi-component'
import * as actions from './earthometer-multi-actions'
import reducers from './earthometer-multi-reducers'
import initialState from './earthometer-multi-initial-state'

const mapStateToProps = state => {
  const { earthometer: { oceanSaved, landSaved, selected, tabs } } = state

  return {
    oceanSaved: (oceanSaved && oceanSaved.value) || null,
    landSaved: (landSaved && landSaved.value) || null,
    selected,
    tabs
  }
}

export { initialState, actions, reducers }
export default connect(mapStateToProps, actions)(EarthoMulti)
