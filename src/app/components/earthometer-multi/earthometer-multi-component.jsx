import React from 'react'
import cx from 'classnames'
import startCase from 'lodash/startCase'
import Knob from './components/knob'

import styles from './earthometer-styles.scss'

const Earthometer = ({ className, tabs, setTab, selected, ...props }) => {
  return (
    <div className={cx(className, styles.earthometer)}>
      <div>Half-Earth</div>
      <Knob
        radius={80}
        halfTickWidth={1}
        handleWidth={10}
        trackWidth={12}
        value={props[`${selected}Saved`]}
        onChange={d => props[`set${startCase(selected)}Saved`](d.percent * 100)}
      />
      <span className={styles.percent}>
        {Math.round(props[`${selected}Saved`])}%
      </span>
      <ul className={styles.tabs}>
        {tabs.map(tab => (
          <li
            key={tab.key}
            className={cx(styles.tab, {
              [styles.tabSelected]: selected === tab.key
            })}
          >
            <button onClick={() => setTab(tab.key)}>{tab.label}</button>
          </li>
        ))}
      </ul>
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
