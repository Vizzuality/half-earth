import React from 'react'
import cx from 'classnames'
import styles from './toggle-styles'

const onOff = isOn => (isOn ? 'On' : 'Off')

const Toggle = ({ isOn, toggle, label, ...props }) => (
  <div className={styles.container}>
    {label && <span className={cx(styles.label, styles.child)}>{label}</span>}
    <div
      className={cx(styles.toggleContainer, {
        [styles.toggleContainerOn]: isOn
      })}
    >
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
  </div>
)

export default Toggle
