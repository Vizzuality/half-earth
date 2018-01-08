import React from 'react'
import cx from 'classnames'
import isMap from 'lodash/isMap'
import { themr } from 'react-css-themr'

import styles from './dropdown.scss'

const keys = list => (isMap(list) ? Array.from(list.keys()) : Object.keys(list))
const get = (value, list) => (isMap(list) ? list.get(value) : list[value])

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
    <div
      onClick={toggleOpen}
      className={cx(theme.label, { [theme.labelClosed]: closed })}
    >
      {get(selected, options)}
    </div>
    <ul className={cx(theme.options, { [theme.optionsClosed]: closed })}>
      {keys(options).map((g, ...rest) => {
        return (
          <li
            key={g}
            className={cx(theme.option, {
              [theme.optionSelected]: g === selected
            })}
            onClick={() => selectItem(g)}
          >
            {get(g, options)}
          </li>
        )
      })}
      {!closed && (
        <button className={theme.closeButton} onClick={() => toggleOpen()} />
      )}
    </ul>
  </div>
)

export default themr('Dropdown', styles)(Dropdown)
