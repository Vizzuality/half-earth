import React from 'react'
import cx from 'classnames'
import { themr } from 'react-css-themr'
import styles from './toggle-styles.scss'

const XToggle = ({ className, active, children, theme, onClick }) => (
  <span
    onClick={onClick}
    className={cx(className, theme.toggle, { [theme.active]: active })}
  >
    {children}
  </span>
)

export default themr('XToggle', styles)(XToggle)
