import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import LocalComponent from './local-component'
import * as actions from './local-actions'
import { actions as mapActions } from 'pages/map'
import { actions as sectionActions } from 'providers/section'
import { actions as popUpActions } from 'providers/pop-up'
import reducers from './local-reducers'
import initialState from './initial-state'
import { renderToggle } from 'components/explorable'

class LocalContainer extends Component {
  constructor (props) {
    super(props)
    props.resetLayers()
  }
  render () {
    return createElement(LocalComponent, this.props)
  }
}

const mapStateToProps = ({ map, local, sidebar }) => ({
  local,
  sidebar,
  renderToggle: renderToggle(map.layers)
})

export { actions, reducers, initialState }
export default connect(mapStateToProps, {
  ...mapActions,
  ...sectionActions,
  ...popUpActions
})(LocalContainer)
