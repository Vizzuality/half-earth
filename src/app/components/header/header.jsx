import React from 'react'
import styles from './header-styles.scss'

const Header = props => (
  <div className={styles.container}>
    <div className={styles.logo} />
    <div className={styles.menu} />
  </div>
)
export default Header
