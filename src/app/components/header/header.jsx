import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header-styles.scss'

const Header = props => (
  <Link to="/">
    <div className={styles.container}>
      <div className={styles.logo} />
      <div className={styles.menu} />
    </div>
  </Link>
)
export default Header
