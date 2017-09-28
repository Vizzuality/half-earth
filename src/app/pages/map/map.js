import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import MapComponent from './map-component'
import initialState from './initial-state'
import * as actions from './map-actions'
import { actions as cartoActions } from 'providers/carto'
import reducers from './map-reducers'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.requestCartos(props)
  }

  requestCartos ({ map, getCartoTiles }) {
    map.layers.map(({ carto, name, url }) => {
      if (carto && !url) {
        const { account, config, apiv, tileFormat } = carto
        getCartoTiles({ account, config, apiv, name, tileFormat })
      }
    })
  }

  render () {
    return createElement(MapComponent, this.props)
  }
}

export { actions, reducers, initialState }
const mapStateToProps = ({ map }) => ({ map })

export default connect(mapStateToProps, { ...actions, ...cartoActions })(
  MapContainer
)
