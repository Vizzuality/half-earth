import React from 'react';
import upperFirst from 'lodash/upperFirst';
import cx from 'classnames';
import styles from './pane-toggle-styles';

const PaneToggle = ({ options, selected, onSwitch }) => (
  <div className={styles.container}>
    <ul className={styles.items}>
      {options.map(item => (
        <li
          key={item.key}
          className={cx(styles.item, {
            [styles.itemSelected]: item.key === selected,
            [styles[`item${upperFirst(item.key)}`]]: true
          })}
        >
          <button className={styles.itemLabel} onClick={onSwitch}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default PaneToggle;
