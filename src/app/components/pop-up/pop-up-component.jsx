import React from 'react'
import cx from 'classnames'
import CloseButton from './close-button/close-button-component'

import theme from './turquoise-close-button-theme.scss'
import styles from './pop-up-styles.scss'

const PopUp = ({ className, open, close, children }) => {
  return (
    open && (
      <article className={cx([className, styles.popUp])}>
        <CloseButton theme={theme} close={close} />
        <div className={styles.content}>{children}</div>
      </article>
    )
  )
}
export default PopUp
