import React from 'react'
import cx from 'classnames'
import styles from './button-styles'

const Button = ({ className, children }) => (
  <button className={cx(className, styles.button)}>{children}</button>
)

export default Button
