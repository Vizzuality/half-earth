import React, { Component } from 'react'

import styles from './intro-styles'

class Intro extends Component {
  render () {
    const { getRef, videoSrc } = this.props

    return (
      <div className={styles.container}>
        <video ref={getRef} autoPlay src={videoSrc} />
      </div>
    )
  }
}
export default Intro
