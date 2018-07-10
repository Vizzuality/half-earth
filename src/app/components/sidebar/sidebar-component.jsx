import React, { Component } from 'react';
import cx from 'classnames';

import Pane from 'components/pane';
import Button from './components/button';
import PaneToggle from './components/pane-toggle';
import styles from './sidebar-styles';

const analytics = {
  open: ['Sidebar', 'Open Sidebar'],
  close: ['Sidebar', 'Close Sidebar']
};

class Sidebar extends Component {
  elemId = 'sidebar-content';

  componentDidUpdate(prevProps, prevState) {
    if (this.props.section !== prevProps.section) {
      this.scrollSectionTop();
    }
  }

  scrollSectionTop() {
    const sidebar = document.getElementById(this.elemId);
    if (sidebar && sidebar.scrollTop > 0) {
      sidebar.scrollTop = 0;
    }
  }

  render() {
    const {
      children,
      className,
      hidden,
      toggleSidebar,
      open,
      route,
      sidePopupOpen,
      mode,
      switchMode
    } = this.props;

    const sidebarAnalytics = open ? analytics.open : analytics.close;
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
            toggleSidebar({ meta: { analytics: [route, ...sidebarAnalytics] } })
          }
        />
        {(route === 'global' || route === 'regional') &&
          open && (
          <PaneToggle
            options={mode.options}
            selected={mode.selected}
            onSwitch={switchMode}
          />
        )}
        <div
          id={this.elemId}
          className={cx(styles.content, {
            [styles.contentOpen]: open,
            [styles.contentLocked]: sidePopupOpen
          })}
        >
          {mode.selected === 'st' ? children : <Pane page={route} />}
        </div>
      </div>
    );
  }
}

export default Sidebar;
