import React from 'react'
import cx from 'classnames'
import { themr } from 'react-css-themr'

import styles from './dropdown.scss'

const Dropdown = ({
  className,
  options,
  selected,
  closed,
  getContainer,
  toggleOpen,
  selectItem,
  theme,
  ...props
}) => (
  <div className={cx(className, theme.dropdown)} ref={getContainer}>
    <div onClick={toggleOpen} className={theme.label}>
      {options[selected]}
    </div>
    <ul className={cx(theme.options, { [theme.optionsClosed]: closed })}>
      {Object.keys(options).map(g => {
        return (
          <li
            key={g}
            className={cx(theme.option, {
              [theme.optionSelected]: g === selected
            })}
            onClick={() => selectItem(g)}
          >
            {options[g]}
          </li>
        )
      })}
      {!closed && (
        <button className={styles.closeButton} onClick={() => toggleOpen()} />
      )}
    </ul>
  </div>
)

export default themr('Dropdown', styles)(Dropdown)
