import { connect } from 'react-redux'
import { renderDropdown } from 'components/explorable'
import { actions as mapActions } from 'pages/map'

import RegionalComponent from './regional-component'
const mapStateToProps = ({ map, global }) => {
  return {
    map,
    renderDropdown: renderDropdown(map.layers, ':regional')
  }
}

export default connect(mapStateToProps, mapActions)(RegionalComponent)
