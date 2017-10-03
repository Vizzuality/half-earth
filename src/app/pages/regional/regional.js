import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { renderDropdown, renderToggle } from 'components/explorable'
import { actions as mapActions } from 'pages/map'

import RegionalComponent from './regional-component'

class RegionalConTainer extends Component {
  constructor (props) {
    super(props)
    props.selectLayer({ name: 'mammals:regional' })
  }
  render () {
    return createElement(RegionalComponent, this.props)
  }
}

const mapStateToProps = ({ map, global }) => {
  return {
    map,
    renderToggle: renderToggle(map.layers, ':regional'),
    renderDropdown: renderDropdown(map.layers, ':regional')
  }
}

export default connect(mapStateToProps, mapActions)(RegionalConTainer)
