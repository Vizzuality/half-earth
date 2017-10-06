import React from 'react'
import cx from 'classnames'

import Button from './button'
import styles from './sidebar-styles'

const Sidebar = ({ children, className, hidden, toggleSidebar, open }) => (
  <div
    className={cx(className, styles.sidebar, {
      [styles.sidebarClosed]: !open,
      [styles.sidebarHidden]: hidden
    })}
  >
    <Button open={open} toggleSidebar={toggleSidebar} />
    {open && <div className={cx(styles.content)}>{children}</div>}
  </div>
)

export default Sidebar