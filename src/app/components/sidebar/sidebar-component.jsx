import React from 'react'
import cx from 'classnames'

import Button from './button'
import styles from './sidebar-styles'

const analytics = {
  open: ['Sidebar', 'Open Sidebar'],
  close: ['Sidebar', 'Close Sidebar']
}

const Sidebar = ({
  children,
  className,
  hidden,
  toggleSidebar,
  open,
  route
}) => {
  const sidebarAnalytics = open ? analytics.open : analytics.close
  return (
    <div
      className={cx(className, styles.sidebar, {
        [styles.sidebarClosed]: !open,
        [styles.sidebarHidden]: hidden
      })}
    >
      <Button
        open={open}
        toggleSidebar={() =>
          toggleSidebar({ meta: { analytics: [route, ...sidebarAnalytics] } })}
      />
      {open && <div className={cx(styles.content)}>{children}</div>}
    </div>
  )
}

export default Sidebar
