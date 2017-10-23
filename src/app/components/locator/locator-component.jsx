import React from 'react'
import cx from 'classnames'
import styles from './locator-styles'
import startCase from 'lodash/startCase'

const Locator = ({ className, route }) => {
  const lable = startCase(route)
  return (
    <div
      style={{ backgroundImage: `url(/img/${route}.png` }}
      className={cx(className, styles.container)}
    >
      <h1 className={styles.title}>{lable}</h1>
    </div>
  )
}

export default Locator
