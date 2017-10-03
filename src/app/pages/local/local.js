import { connect } from 'react-redux'

import LocalComponent from './local-component'
import * as actions from './local-actions'
import { actions as mapActions } from 'pages/map'
import reducers from './local-reducers'
import initialState from './initial-state'
import { renderToggle } from 'components/explorable'

export { actions, reducers, initialState }

const mapStateToProps = ({ map, local }) => ({
  local,
  renderToggle: renderToggle(map.layers)
})

export default connect(mapStateToProps, mapActions)(LocalComponent)
