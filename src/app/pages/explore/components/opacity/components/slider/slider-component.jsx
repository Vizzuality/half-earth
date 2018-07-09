import React from 'react';
import cx from 'classnames';
import BaseSlider from 'components/slider';
import styles from './slider-styles';

const Slider = ({ onChange, value, label, ...props }) => (
  <div className={styles.container}>
    {label && <span className={cx(styles.label, styles.child)}>{label}</span>}
    <BaseSlider
      className={styles.child}
      value={value}
      min={0}
      max={1}
      theme={styles}
      onChange={onChange}
    />
    <span className={cx(styles.value, styles.child)}>
      {Math.round(value * 100)}
    </span>
  </div>
);

export default Slider;
