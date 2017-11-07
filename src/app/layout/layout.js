import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import capitalize from 'lodash/capitalize'

import Layout from './layout-component'

const scope = path => path.replace('/', '') || 'home'

function mapStateToProps (state, { location }) {
  const route = scope(location.pathname)
  const page = state[route]
  const { section } = state

  const getLayerName = layer => {
    if (layer.startsWith('pa-scenario')) return 'pa-scenario'
    const parts = layer.split(':')
    if (parts.length === 1) return parts[0]

    return parts[0] + capitalize(parts[1])
  }
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
