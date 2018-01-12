import React from 'react'
import cx from 'classnames'

import Pane from 'components/pane'
import Button from './components/button'
import PaneToggle from './components/pane-toggle'
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
  route,
  sidePopupOpen,
  mode,
  switchMode,
  ...props
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
      <div
        className={cx(styles.content, {
          [styles.contentOpen]: open,
          [styles.contentLocked]: sidePopupOpen
        })}
      >
        {route === 'regional' && (
          <PaneToggle
            options={mode.options}
            selected={mode.selected}
            onSwitch={() => switchMode()}
          />
        )}
        {mode.selected === 'st' ? (
          children
        ) : (
          route === 'regional' && <Pane page={route} />
        )}
      </div>
    </div>
  )
}

export default Sidebar
