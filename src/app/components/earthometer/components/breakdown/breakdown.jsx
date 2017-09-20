import React from 'react'
import cx from 'classnames'

import Radial from './components/radial'
import styles from './breakdown-styles.scss'

const groups = [
  { name: 'mammals', getValue: v => Math.round(v) },
  { name: 'birds', getValue: v => Math.round(v) },
  {
    name: 'amphibians',
    getValue: v => Math.round(v)
  },
  { name: 'reptiles', getValue: v => Math.round(v) },
  {
    name: 'invertebrates',
    getValue: v => Math.round(v)
  },
  { name: 'plants', getValue: v => Math.round(v) }
]

const Breakdown = ({ className, earthSaved }) => (
  <div className={className}>
    <ul className={styles.items}>
      {groups.map(({ name, url, getValue }) => {
        return (
          <li key={name} className={styles.item}>
            <h1 className={styles.label}>{name}</h1>
            <div className={styles.radialValue}>
              <h2 className={styles.value}>{getValue(earthSaved)}%</h2>
              <Radial
                theme={styles}
                className={cx(styles.radial, styles[name])}
                background={url}
                progress={getValue(earthSaved)}
              />
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Breakdown
