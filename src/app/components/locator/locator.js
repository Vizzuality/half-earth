import { createElement, Component } from 'react'

import LocatorComponent from './locator-component'

class LocatorContainer extends Component {
  static defaultProps = {
    options: { global: 'global', regional: 'regional' }
  }

  render () {
    return createElement(LocatorComponent, { ...this.props })
  }
}

export default LocatorContainer
