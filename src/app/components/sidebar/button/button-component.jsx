import React from 'react'
import cx from 'classnames'

import styles from './button-styles'

const Button = ({ toggleSidebar, sidebar }) => (
  <div
    onClick={toggleSidebar}
    className={cx(styles.container, {
      [styles.containerClosed]: !sidebar.open
    })}
  />
)

export default Button
