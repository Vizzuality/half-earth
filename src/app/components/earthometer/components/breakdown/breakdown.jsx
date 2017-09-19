import React from 'react'
import cx from 'classnames'

import Radial from './radial'
import styles from './breakdown-styles.scss'

const groups = [
  { name: 'mammals', url: '/img/mammals.png', getValue: v => Math.round(v) },
  { name: 'birds', url: '/img/birds.png', getValue: v => Math.round(v) },
  {
    name: 'amphibians',
    url: '/img/amphibians.png',
    getValue: v => Math.round(v)
  },
  { name: 'reptiles', url: '/img/reptiles.png', getValue: v => Math.round(v) },
  {
    name: 'invertebrates',
    url: '/img/invertebrates.png',
    getValue: v => Math.round(v)
  },
  { name: 'plants', url: '/img/plants.png', getValue: v => Math.round(v) }
]

const Breakdown = ({ className, earthSaved }) => (
  <div className={className}>
    <ul className={styles.items}>
      {groups.map(({ name, url, getValue }) => {
        return (
          <li key={name} className={styles.item}>
            <h1 className={styles.label}>{name}</h1>
            <div className={styles.dotValue}>
              <h2 className={styles.value}>{getValue(earthSaved)}%</h2>
              <Radial
                className={cx(styles.dots, styles.mammals)}
                background={url}
                strokeWidth={3}
                width={54}
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
