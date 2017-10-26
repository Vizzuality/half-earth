import { createElement, Component } from 'react'

import LocatorComponent from './locator-component'

class LocatorContainer extends Component {
  static defaultProps = {
    options: { local: 'local', regional: 'regional', global: 'global' }
  }

  render () {
    return createElement(LocatorComponent, { ...this.props })
  }
}

export default LocatorContainer
