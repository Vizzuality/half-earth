import React from 'react'
import styles from './layout-styles.scss'

// <div className={styles.grid}>{new Array(12).fill(0).map((v, i) => i).map(g => <div key={`gr-${g}`} className={styles.col}>' '</div>)}</div>

const Layout = ({ children }) => (
  <div>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Layout
