import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import styles from './nav-footer-styles.scss'

const NavFooter = ({ className, from, to }) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.controls}>
      <Link className={styles.back} to={from}>
        Go Back
      </Link>
      <Link className={styles.forth} to={to} />
    </div>
  </div>
)
export default NavFooter
