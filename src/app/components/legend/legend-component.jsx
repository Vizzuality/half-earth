import React from 'react';
import cx from 'classnames';

import styles from './legend-styles.scss';

const Legend = props => {
  const { className, children, title, closed, toggleOpen } = props;
  return (
    <aside className={cx(className, styles.legend)}>
      <div className={cx([styles.title, { [styles.titleClosed]: closed }])}>
        <button onClick={toggleOpen}>{title}</button>
      </div>
      <div className={cx([styles.box, { [styles.boxClosed]: closed }])}>
        {children}
      </div>
    </aside>
  );
};
export default Legend;
