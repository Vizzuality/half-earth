import React from 'react'
import cx from 'classnames'

import styles from './nav-footer-styles.scss'

const NavFooter = ({ className, from, to, onClickTo, onClickFrom }) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.controls}>
      <a className={styles.back} onClick={() => onClickFrom()}>
        Go Back
      </a>
      <a className={styles.forth} onClick={() => onClickTo()} />
    </div>
  </div>
)
export default NavFooter
