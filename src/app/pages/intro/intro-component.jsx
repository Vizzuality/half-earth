import React, { Component } from 'react'

import styles from './intro-styles'

class Intro extends Component {
  render () {
    const { getRef, videoSrc } = this.props

    return (
      <div className={styles.container}>
        <video ref={getRef} autoPlay src={videoSrc} />
        <p>
          Swooping over Botswana’s Okavango Delta, the white stork (Ciconia
          ciconia) observes the oasis beneath its wings.
        </p>
      </div>
    )
  }
}
export default Intro
