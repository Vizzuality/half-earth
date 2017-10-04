import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'

import { renderDropdown, renderToggle } from 'components/explorable'
import GlobalComponent from './global-component'
import { actions as mapActions } from 'pages/map'

const mapStateToProps = ({ map, global, sidebar }) => {
  return {
    map,
    sidebar,
    renderToggle: renderToggle(map.layers, ':global'),
    renderDropdown: renderDropdown(map.layers, ':global')
  }
}

class GlobalContainer extends Component {
  constructor (props) {
    super(props)
    props.selectLayer({ name: 'birds:global' })
  }
  render () {
    return createElement(GlobalComponent, assign(this.props))
  }
}

export default connect(mapStateToProps, mapActions)(GlobalContainer)
