import React from 'react'
import cx from 'classnames'
import styles from './locator-styles'
import startCase from 'lodash/startCase'

const stripDash = s => s.replace(/\//g, '')

const Locator = ({ className, ...props }) => {
  const name = stripDash(props.location.pathname)
  const lable = startCase(name)
  return (
    <div
      style={{ backgroundImage: `url(/img/${name}.png` }}
      className={cx(className, styles.container)}
    >
      <h1 className={styles.title}>{lable}</h1>
    </div>
  )
}

export default Locator
