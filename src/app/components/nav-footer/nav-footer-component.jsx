import React from 'react'
import cx from 'classnames'
import { themr } from 'react-css-themr'
import styles from './nav-footer-styles.scss'

const NavFooter = ({ className, from, to, onClickTo, onClickFrom, theme }) => (
  <div className={cx(theme.container, className)}>
    <div className={theme.controls}>
      <div className={theme.back}>
        <span className={theme.label}>Back</span>
        <a className={theme.arrowButton} onClick={() => onClickFrom()} />
      </div>
      <div className={theme.forth}>
        <a className={theme.arrowButton} onClick={() => onClickTo()} />
        <span className={theme.label}>Next</span>
      </div>
    </div>
  </div>
)
export default themr('NavFooter', styles)(NavFooter)
