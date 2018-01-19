import React from 'react'
import cx from 'classnames'
import styles from './locator-styles'
import Dropdown from 'components/dropdown'
import dropdownTheme from './locator-dropdown-theme.scss'

const Locator = ({ className, route, history, options }) => {
  return (
    <div className={cx(className, styles.container)}>
      <Dropdown
        options={options}
        className={dropdownTheme.dropdown}
        theme={dropdownTheme}
        onSelect={r => history.push(r)}
        selected={route}
        sort={false}
      />
      <div
        className={styles.earth}
        style={{ backgroundImage: `url(/img/${route}.png` }}
      />
    </div>
  )
}

export default Locator
