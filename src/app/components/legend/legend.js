import { createElement, Component } from 'react'

import LegendComponent from './legend-component'

class LegendContainer extends Component {
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

export default LegendContainer
