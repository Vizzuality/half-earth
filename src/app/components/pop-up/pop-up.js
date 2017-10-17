import { createElement, Component } from 'react'
import { clickOutside } from 'utils/react'

import PopUp from './pop-up-component'

class PopUpContainer extends Component {
  componentWillReceiveProps ({ clickedOutside, close, ...props }) {
    if (clickedOutside && this.props.open) close()
  }

  render () {
    return createElement(PopUp, { ...this.props })
  }
}

export { default as ImageContent } from './image-content/image-content'
export { default as TextContent } from './text-content/text-content'
export { default as VideoContent } from './video-content/video-content'
export default clickOutside(PopUpContainer)
