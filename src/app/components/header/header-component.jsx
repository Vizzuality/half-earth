import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './header-styles.scss';

const Header = ({ className }) => (
  <div className={cx(className, styles.container)}>
    <Link className={styles.link} to="/">
      <div className={styles.logo} />
    </Link>
    <Link className={styles.link} to="/">
      <div className={styles.menu} />
    </Link>
  </div>
);
export default Header;
