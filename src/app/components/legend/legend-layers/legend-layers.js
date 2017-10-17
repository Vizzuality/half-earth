import { connect } from 'react-redux'

import LegendLayers from './legend-layers-component'

function mapStateToProps (state, ownProps) {
  const page = state[ownProps.page]
  const layers = page
    ? page.layers
        .filter(layer => layer.visible)
        .map(layer => layer.name)
        .map(layer => layer.split(':')[0])
        .map(layer => page.legend[layer] || {})
    : []
  console.warn(layers)
  return { layers }
}

export default connect(mapStateToProps)(LegendLayers)
