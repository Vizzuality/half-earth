import React, { Children } from 'react'
import Collapse from 'react-collapse'
import cx from 'classnames'
import styles from './expand-styles'

const Expand = ({ expand, isOpen, children, label, ...props }) => {
  const openClosed = isOpen ? 'Close' : 'Open'
  return (
    <div>
      <button onClick={expand} className={styles.expand}>
        <span className={styles.icon} onClick={expand}>
          <span className={cx(styles.arrow, styles[`arrow${openClosed}`])}>
            {openClosed}
          </span>
        </span>
        <span className={styles.label}>{label && label}</span>
      </button>
      <Collapse isOpened={isOpen}>
        <div className={styles.child}>
          {Children.map(children, Child => Child)}
        </div>
      </Collapse>
    </div>
  )
}

export default Expand
