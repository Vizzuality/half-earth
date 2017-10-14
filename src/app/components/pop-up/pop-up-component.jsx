import React from 'react'
import cx from 'classnames'

import styles from './pop-up-styles.scss'

const PopUp = ({ className, closed, close, children, render = () => {} }) => (
  <article
    className={cx([className, styles.popUp, { [styles.popUpClosed]: closed }])}
  >
    <button className={styles.close} onClick={close} />
    <div>{render()}</div>
  </article>
)
export default PopUp
