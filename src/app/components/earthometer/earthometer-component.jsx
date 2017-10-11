import React from 'react'
import last from 'lodash/last'
import cx from 'classnames'

import Slider from 'components/slider'
import styles from './earthometer-styles.scss'
import theme from './slider-theme.scss'
const values = [0, 50, 100]

const hasPercent = v => v === 50
const showPercent = v => (hasPercent(v) ? '%' : '')

const Earthometer = ({ className, earthSaved, setEarthSaved }) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.wrap}>
      <div className={styles.labels}>
        <h1 className={styles.title}>Earth Conserved</h1>
        <h2 className={styles.percentSaved}>{Math.round(earthSaved)}%</h2>
      </div>
      <div>
        <Slider
          className={styles.slider}
          theme={theme}
          value={earthSaved}
          max={last(values)}
          onChange={setEarthSaved}
        />
        <ul className={styles.values}>
          {values.map(v => (
            <li className={cx({ [styles.percent]: hasPercent(v) })} key={v}>
              {v}
              {showPercent(v)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Earthometer
