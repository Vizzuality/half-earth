import React from 'react'

import Slider from './components/slider'
import Percent from './components/percent'
import Breakdown from './components/breakdown'

import styles from './earthometer-styles.scss'

const Earthometer = props => {
  const { earthSaved } = props
  return (
    <div className={styles.container}>
      <Slider className={styles.col} {...props} />
      <Percent className={styles.colMiddle} />
      <Breakdown className={styles.col} earthSaved={earthSaved} />
    </div>
  )
}

export default Earthometer
