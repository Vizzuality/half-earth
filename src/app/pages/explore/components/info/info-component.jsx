import React from 'react';
import styles from './info-styles';

const Info = ({ onClick }) => (
  <div className={styles.container}>
    <button onClick={onClick} className={styles.info}>
      ⓘ
    </button>
  </div>
);

export default Info;
