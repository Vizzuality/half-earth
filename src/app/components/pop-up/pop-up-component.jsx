import React from 'react'
import cx from 'classnames'

import styles from './pop-up-styles.scss'

const PopUp = ({ className, close, children }) => (
  <article className={cx(className, styles.container)}>
    <button className={styles.close} onClick={close} />
    <div>{children}</div>
  </article>
)
export default PopUp
