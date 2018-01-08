import React from 'react'
import cx from 'classnames'
import styles from './toggle-styles'

const onOff = isOn => (isOn ? 'On' : 'Off')

const Toggle = ({ isOn, toggle, ...props }) => (
  <div className={cx(styles.container, { [styles.containerOn]: isOn })}>
    <button
      className={cx(styles.toggle, {
        [styles.toggleOn]: isOn,
        [styles.toggleOff]: !isOn
      })}
      onClick={() => toggle()}
    >
      {onOff(isOn)}
    </button>
  </div>
)

export default Toggle
