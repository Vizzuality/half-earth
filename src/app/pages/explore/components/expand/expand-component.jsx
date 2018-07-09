import React, { Children } from 'react';
import cx from 'classnames';
import styles from './expand-styles';

const Expand = ({ expand, isOpen, children, label, ...props }) => {
  const openClosed = isOpen ? 'Close' : 'Open';
  return [
    <button key="expand-btn" onClick={expand} className={styles.expand}>
      <span className={styles.icon} onClick={expand}>
        <span className={cx(styles.arrow, styles[`arrow${openClosed}`])}>
          {openClosed}
        </span>
      </span>
      <span className={styles.label}>{label && label}</span>
    </button>,
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
