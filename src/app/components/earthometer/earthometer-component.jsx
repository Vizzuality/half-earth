import React from 'react'
import last from 'lodash/last'
import cx from 'classnames'

import Slider from 'components/slider'
import styles from './earthometer-styles.scss'
import theme from './slider-theme.scss'
const values = [0, 50, 100]

const isHalfWayThrough = v => v === 50
const formatValue = v => (isHalfWayThrough(v) ? 'Half' : v)

const Earthometer = ({ className, earthSaved, setEarthSaved, displayOnly }) => {
  console.info(displayOnly)
  const title = displayOnly
    ? 'Earth conserved accounts for around'
    : 'Earth Conserved'
  return (
    <div className={cx(className, styles.earthometer)}>
      <div className={styles.container}>
        <div className={styles.labels}>
          <h3
            className={cx([
              styles.title,
              { [styles.titleSmall]: !displayOnly }
            ])}
          >
            {title}
          </h3>
          <div
            className={cx([styles.wrap, { [styles.wrapHidden]: displayOnly }])}
          >
            {!displayOnly && (
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
                    <li
                      className={cx({ [styles.half]: isHalfWayThrough(v) })}
                      key={v}
                    >
                      {formatValue(v)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <h2 className={styles.percentSaved}>{Math.round(earthSaved)}%</h2>
        </div>
      </div>
    </div>
  )
}

export default Earthometer
