import React from 'react'
import cx from 'classnames'

import styles from './nav-footer-styles.scss'

const NavFooter = ({ className, goBack, goForth }) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.controls}>
      <a className={styles.back} onClick={goBack}>
        Go Back
      </a>
      <button className={styles.forth} onClick={goForth} />
    </div>
  </div>
)
export default NavFooter
