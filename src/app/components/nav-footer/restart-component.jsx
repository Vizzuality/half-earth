import React from 'react';
import cx from 'classnames';
import Link from 'redux-first-router-link';

import styles from './nav-footer-styles';

const Restart = ({ className }) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.controls}>
      <div className={styles.forth}>
        <Link to="/" className={styles.arrowButton} />
        <Link to="/" className={styles.label}>
          Start the story again
        </Link>
      </div>
    </div>
  </div>
);

export default Restart;
