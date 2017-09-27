import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import MapComponent from './map-component'
import initialState from './initial-state'
import * as actions from './map-actions'
import reducers from './map-reducers'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.requestCartos(props)
  }

  requestCartos (props) {
    props.map.layers.map(({ carto, name }) => {
      if (carto) {
        const { account, config, apiv, tileFormat } = carto
        props.getCartoTiles({ account, config, apiv, name, tileFormat })
      }
    })
  }

  render () {
    return createElement(MapComponent, this.props)
  }
}

export { actions, reducers, initialState }
const mapStateToProps = ({ map }) => ({ map })

export default connect(mapStateToProps, actions)(MapContainer)
