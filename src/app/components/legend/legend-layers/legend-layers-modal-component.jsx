import React from 'react';
import isFunction from 'lodash/isFunction';
import styles from './legend-layers-styles.scss';
// import Latex from 'react-latex'
import data from 'data/layers-info';

const ModalContent = ({ section = 'global' }) => (
  <div className={styles.legendPopUp}>
    {data[section].map((item, i) => (
      <div className={styles.containInfo} key={i}>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <p>
          {isFunction(item.description) ? <item.description styles={styles} /> : item.description}
        </p>
        <p className={styles.source}>
          Source:{' '}
          {isFunction(item.source) ? <item.source styles={styles} /> : item.source}
        </p>
      </div>
    ))}
  </div>
);

export default ModalContent;
