import React from 'react'
import cx from 'classnames'

import styles from './button-styles'

const Button = ({ toggleSidebar, sidebar }) => (
  <div
    className={cx(styles.container, {
      [styles.containerClosed]: !sidebar.open
    })}
  >
    <div className={styles.arrow} onClick={toggleSidebar} />
  </div>
)

export default Button
