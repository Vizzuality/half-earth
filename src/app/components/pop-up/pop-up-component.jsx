import React, { Children } from 'react'
import cx from 'classnames'
import CloseButton from './close-button/close-button-component'

import blueTheme from './turquoise-close-button-theme.scss'
import borderlessTheme from './borderless-close-button-theme.scss'
import styles from './pop-up-styles.scss'

const PopUp = ({ className, closed, close, children }) => {
  const child = Children.only(children)
  const type = child && child.type.name
  const theme = type !== 'ImageContent' ? blueTheme : borderlessTheme
  return (
    !closed && (
      <article className={cx([className, styles.popUp])}>
        <CloseButton theme={theme} close={close} />
        <div className={styles.content}>{children}</div>
      </article>
    )
  )
}
export default PopUp
