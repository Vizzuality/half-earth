import React from 'react'
import cx from 'classnames'
import styles from './opacity-styles'

const next = (options, value) => {
  const index = options.indexOf(value)
  const nextIndex = index + 1
  return nextIndex === options.length ? options[0] : options[nextIndex]
}

const Opacity = ({ value, options, update, path, label, ...props }) => (
  <div className={styles.container}>
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
              [styles.iconHidden]: opacity !== value
            })}
          >
            O
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Opacity
