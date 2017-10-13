import React, { Component } from 'react'

import styles from './intro-styles'

class Intro extends Component {
  render () {
    const { getRef, videoSrc } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video ref={getRef} autoPlay src={videoSrc} />
        </div>
      </div>
    )
  }
}
export default Intro
