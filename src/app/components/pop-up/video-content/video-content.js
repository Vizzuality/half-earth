import { createElement, Component } from 'react'

import VideoContent from './video-content-component'

class VideoContentContainer extends Component {
  state = {
    playing: false
  }

  onClickPlay = () => {
    this.setState({ playing: true })
  }

  render () {
    const { playing } = this.state
    const { onClickPlay } = this
    return createElement(VideoContent, { ...this.props, playing, onClickPlay })
  }
}

export default VideoContentContainer
