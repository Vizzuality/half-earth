import { createElement, Component } from 'react'
import { connect } from 'react-redux'

import LegendComponent from './legend-component'

function mapStateToProps (props, { page }) {
  return { layers: props[page].layers }
}

class LegendContainer extends Component {
  static defaultProps = {
    title: 'Legend'
  }

  state = {
    closed: false
  }

  toggleOpen = () => {
    this.setState(state => ({ closed: !state.closed }))
  }

  render () {
    const { toggleOpen } = this
    const { closed } = this.state
    return createElement(LegendComponent, { ...this.props, closed, toggleOpen })
  }
}

export { default as LegendLayers } from './legend-layers/legend-layers'

export default connect(mapStateToProps)(LegendContainer)
