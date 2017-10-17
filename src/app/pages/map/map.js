import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import MapComponent from './map-component'
import initialState from './initial-state'
import * as actions from './map-actions'
import * as utils from './map-utils'
import { actions as cartoActions } from 'providers/carto'
import reducers from './map-reducers'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    const { getCartoTiles } = props
    const { layers } = props.map
    utils.requestCartos({ layers, getCartoTiles })
  }

  render () {
    return createElement(MapComponent, this.props)
  }
}

export { actions, reducers, initialState, utils }
const mapStateToProps = ({ map, regional, global }) => ({
  map,
  regional,
  global
})

export default connect(mapStateToProps, { ...actions, ...cartoActions })(
  MapContainer
)
