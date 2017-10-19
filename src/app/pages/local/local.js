import { connect } from 'react-redux'

import LocalComponent from './local-component'
import { actions as popUpActions } from 'components/pop-up'
import reducers from './local-reducers'
import initialState from './initial-state'
import { renderToggle } from 'components/explorable'

const mapStateToProps = ({ map, local, sidebar }) => ({
  local,
  sidebar,
  renderToggle: renderToggle(map.layers)
})

export { reducers, initialState }
export default connect(mapStateToProps, {
  ...popUpActions
})(LocalComponent)
