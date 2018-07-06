import React from 'react';
import cx from 'classnames';
import styles from './opacity-styles';

const next = (options, value) => {
  const index = options.indexOf(value);
  const nextIndex = index + 1;
  return nextIndex === options.length ? options[0] : options[nextIndex];
};

const Opacity = ({
  value,
  options,
  update,
  path,
  label,
  disabled,
  ...props
}) => (
  <div
    className={cx(styles.container, { [styles.containerDisabled]: disabled })}
  >
    <span className={styles.tooltip}>
      {label} {value}%
    </span>
    <ul className={styles.opacities}>
      {options.map(opacity => (
        <li
          key={opacity}
          className={cx(styles.opacity, {
            [styles[`opacity${opacity}`]]: true
          })}
        >
          <button
            onClick={() => update(next(options, opacity))}
            className={cx(styles.icon, {
              [styles.iconHidden]: Number(opacity) !== Number(value)
            })}
          >
            O
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Opacity;
