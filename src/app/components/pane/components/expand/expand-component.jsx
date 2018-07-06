import React, { Children } from 'react';
import cx from 'classnames';
import Info from 'components/pane/components/info';
import styles from './expand-styles';

const Expand = ({
  expand,
  isOpen,
  info,
  children,
  openPopup,
  label,
  ...props
}) => {
  const openClosed = isOpen ? 'Close' : 'Open';
  return [
    <div key="expand-btn" className={styles.expand}>
      <span className={styles.icon} onClick={expand}>
        <span className={cx(styles.arrow, styles[`arrow${openClosed}`])}>
          <button onClick={expand}>{openClosed}</button>
        </span>
      </span>
      <span className={styles.label}>
        {label && (
          <button className={styles.label} onClick={expand}>
            {label}
          </button>
        )}
        {info && (
          <Info className={styles.paneInfo} onClick={() => openPopup(info)} />
        )}
      </span>
    </div>,
    <div
      key="expand-pane"
      className={cx(styles.collapse, { [styles.collapseClosed]: !isOpen })}
    >
      <div className={styles.child}>
        {Children.map(children, Child => Child)}
      </div>
    </div>
  ];
};

export default Expand;
