import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'

import { renderDropdown, renderToggle } from './global-helpers'
import GlobalComponent from './global-component'
import { actions as mapActions } from 'pages/map'

const mapStateToProps = ({ map, global }) => {
  return {
    map,
    renderToggle: renderToggle(map.layers),
    renderDropdown: renderDropdown(map.layers)
  }
}

class GlobalContainer extends Component {
  constructor (props) {
    super(props)
    props.selectLayer({ name: 'birds' })
  }
  render () {
    return createElement(GlobalComponent, assign(this.props))
  }
}

export default connect(mapStateToProps, mapActions)(GlobalContainer)
