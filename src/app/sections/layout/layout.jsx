import React from 'react'
import styles from './layout-styles.scss'

const Layout = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Layout
