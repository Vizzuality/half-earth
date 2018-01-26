import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import capitalize from 'lodash/capitalize'
import groupBy from 'lodash/groupBy'
import values from 'lodash/values'
import flatten from 'lodash/flatten'
import * as keyActions from 'providers/keyboard/keyboard-actions'

import Layout from './layout-component'

const scope = path => path.replace('/', '') || 'home'

const sortLayers = (a, b) => {
  if (a.type === 'gradient' && b.type !== 'gradient') return 1
  if (a.type !== 'gradient' && b.type === 'gradient') return -1
  if (a.type === 'gradient' && b.type === 'gradient') return 0
}

class LayoutContainer extends Component {
  constructor (props) {
    super(props)
    this.onkeyUp = this.onkeyUp.bind(this)
  }

  onkeyUp (e) {
    this.props.keyUp(e)
  }
  componentDidMount () {
    window.addEventListener('keyup', this.onkeyUp)
  }
  componentWillMount () {
    window.removeEventListener('keyup', this.onkeyUp)
  }

  render () {
    return createElement(Layout, this.props)
  }
}

function mapStateToProps (state, { location }) {
  const route = scope(location.pathname)
  const page = state[route]
  const { section, interactions } = state

  const getLayerName = layer => {
    if (layer.startsWith('prioritization-of-places')) {
      return 'prioritization-of-places'
    }
    const parts = layer.split(':')
    if (parts.length === 1) return parts[0]

    return parts[0] + capitalize(parts[1])
  }
  const activeLayers =
    page && Array.isArray(page.layers)
      ? page.layers
          .filter(layer => layer.visible)
          .sort(sortLayers)
          .map(layer => ({ ...layer, group: layer.group || '' }))
          .map(layer => layer.name)
          .map(getLayerName)
          .map(layer => page.legend && page.legend[layer])
          .filter(layer => !!layer)
      : []

  const groupedLayers = flatten(
    values(groupBy(activeLayers, 'group')).map(group =>
      group.map((item, i) => ({ ...item, showGroup: i === 0 }))
    )
  )

  const layers = groupedLayers.length > 0 && groupedLayers
  return {
    location,
    route,
    layers,
    section,
    interaction: interactions.interaction
  }
}

export default withRouter(connect(mapStateToProps, keyActions)(LayoutContainer))
