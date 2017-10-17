import React from 'react'
import cx from 'classnames'

import styles from './image-content-styles.scss'

const ImageContent = ({ className, content }) => {
  const { description, background } = content
  return (
    <div
      className={cx([className, styles.imageContent])}
      style={{ backgroundImage: `url(${background})` }}
    >
      <p className={styles.description}>{description}</p>
    </div>
  )
}
export default ImageContent
