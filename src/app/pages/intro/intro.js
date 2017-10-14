import { createElement, Component } from 'react'
import { withRouter } from 'react-router-dom'

import IntroComponent from './intro-component'

class IntroContainer extends Component {
  componentDidMount () {
    this.player.addEventListener('ended', this.onVideoEnds.bind(this))
  }

  onVideoEnds = () => {
    this.props.history.push('/local')
  }

  getRef = el => {
    this.player = el
  }

  render () {
    const { getRef } = this
    return createElement(IntroComponent, {
      ...this.props,
      getRef,
      videoSrc: '/videos/intro.mp4'
    })
  }
}

export default withRouter(IntroContainer)
