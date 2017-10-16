import React from 'react'
import cx from 'classnames'

import styles from './pop-up-styles.scss'

const PopUp = ({ className, closed, close, children, render = () => {} }) =>
  !closed && (
    <article className={cx([className, styles.popUp])}>
      <button className={styles.close} onClick={close} />
      <div className={styles.content}>{render()}</div>
    </article>
  )
export default PopUp
