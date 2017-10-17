import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'

import { renderDropdown, renderToggle } from 'components/explorable'
import GlobalComponent from './global-component'
import graph from './global-initial-state'
import { actions as mapActions } from 'pages/map'
import { actions as sectionActions } from 'providers/section'
import { actions as selectorActions } from 'providers/selectors'

const mapStateToProps = ({ map, global, sidebar }) => {
  return {
    map,
    graph,
    sidebar,
    renderToggle: renderToggle(map.layers, ':global'),
    renderDropdown: renderDropdown(map.layers, ':global')
  }
}

class GlobalContainer extends Component {
  constructor (props) {
    super(props)
    console.log('')
    // props.resetLayers()
  }
  render () {
    return createElement(GlobalComponent, assign(this.props))
  }
}

export default connect(mapStateToProps, {
  ...mapActions,
  ...sectionActions,
  ...selectorActions
})(GlobalContainer)
