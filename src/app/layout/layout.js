import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Layout from './layout-component'

const scope = path => path.replace('/', '') || 'home'

function mapStateToProps (state, { location }) {
  const route = scope(location.pathname)
  const page = state[route]
  const { section } = state

  // TODO: improve this
  const getLayerName = layer => layer.split('pa-scenario')[0].split(':')[0]
  const activeLayers =
    page && Array.isArray(page.layers)
      ? page.layers
          .filter(layer => layer.visible)
          .map(layer => layer.name)
          .map(getLayerName)
          .map(layer => page.legend && page.legend[layer])
          .filter(layer => !!layer)
      : []
  const layers = activeLayers.length > 0 && activeLayers

  return { location, route, layers, section }
}

export default withRouter(connect(mapStateToProps)(Layout))
