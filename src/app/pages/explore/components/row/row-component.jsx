import React, { Children } from 'react'
import styles from './row-styles.scss'

const Row = ({
  children,
  someValue,
  toggleValue,
  opacity,
  updateOpacity,
  openInfo
}) => <div className={styles.row}>{Children.map(children, Child => Child)}</div>

export default Row
