import React from 'react'
import cx from 'classnames'
import { themr } from 'react-css-themr'
import styles from './nav-footer-styles.scss'

const NavFooter = ({ className, from, to, onClickTo, onClickFrom, theme }) => (
  <div className={cx(theme.container, className)}>
    <div className={theme.controls}>
      <a className={theme.back} onClick={() => onClickFrom()}>
        Go Back
      </a>
      <a className={theme.forth} onClick={() => onClickTo()} />
    </div>
  </div>
)
export default themr('NavFooter', styles)(NavFooter)
