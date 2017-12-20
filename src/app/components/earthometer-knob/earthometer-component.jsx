import React from 'react'
import Knob from './components/knob'
import cx from 'classnames'

import styles from './earthometer-styles.scss'

const Earthometer = ({ className, earthSaved, setEarthSaved, displayOnly }) => {
  return (
    <div className={cx(className, styles.earthometer)}>
      <div>Half Earth</div>
      <Knob
        radius={80}
        halfTickWidth={1}
        handleWidth={10}
        trackWidth={12}
        onChange={d => setEarthSaved(d.percent * 100)}
      />
      <div className={styles.labels}>
        <span className={cx(styles.label, styles.protected)}>
          Current protected area
        </span>
        <span className={cx(styles.label, styles.notProtected)}>
          Not protected
        </span>
      </div>
    </div>
  )
}

export default Earthometer
