import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import MapComponent from './map-component'
import initialState from './initial-state'
import * as actions from './map-actions'
import { requestCartos } from './map-utils'
import { actions as cartoActions } from 'providers/carto'
import reducers from './map-reducers'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    const { getCartoTiles } = props
    const { layers } = props.map
    requestCartos({ layers, getCartoTiles })
  }

  render () {
    return createElement(MapComponent, this.props)
  }
}

export { actions, reducers, initialState }
const mapStateToProps = ({ map, regional }) => ({ map, regional })

export default connect(mapStateToProps, { ...actions, ...cartoActions })(
  MapContainer
)
