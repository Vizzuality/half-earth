import { createElement, Component } from 'react'

import LocatorComponent from './locator-component'

const options = new Map()

options.set('home', 'intro')
options.set('global', 'global')
options.set('regional', 'regional')

class LocatorContainer extends Component {
  static defaultProps = {
    options
  }

  render () {
    return createElement(LocatorComponent, { ...this.props })
  }
}

export default LocatorContainer
