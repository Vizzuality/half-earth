import { createElement, Component } from 'react'
import { clickOutside } from 'utils/react'

import PopUp from './pop-up-component'

class PopUpContainer extends Component {
  state = {
    closed: false
  }

  componentWillReceiveProps ({ clickedOutside, ...props }) {
    if (clickedOutside) this.setState({ closed: clickedOutside })
  }

  close = () => {
    this.setState({ closed: true })
  }

  render () {
    const { closed } = this.state
    const { close } = this
    return createElement(PopUp, { ...this.props, closed, close })
  }
}

export { default as TextContent } from './text-content/text-content'
export default clickOutside(PopUpContainer)
