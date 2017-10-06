import { connect } from 'react-redux'

import LocalComponent from './local-component'
import * as actions from './local-actions'
import { actions as mapActions } from 'pages/map'
import { actions as sectionActions } from 'providers/section'
import reducers from './local-reducers'
import initialState from './initial-state'
import { renderToggle } from 'components/explorable'

const mapStateToProps = ({ map, local, sidebar }) => ({
  local,
  sidebar,
  renderToggle: renderToggle(map.layers)
})

export { actions, reducers, initialState }
export default connect(mapStateToProps, { ...mapActions, ...sectionActions })(
  LocalComponent
)
