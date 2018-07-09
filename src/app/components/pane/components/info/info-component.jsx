import React from 'react';
import cx from 'classnames';
import styles from './info-styles';

const Info = ({ className, onClick }) => (
  <div className={cx(styles.container, className)}>
    <button onClick={onClick} className={styles.info}>
      ⓘ
    </button>
  </div>
);

export default Info;
