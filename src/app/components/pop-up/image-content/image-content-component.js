import React from 'react'
import cx from 'classnames'
import capitalize from 'lodash/capitalize'

import styles from './image-content-styles.scss'

const ImageContent = ({ className, content }) => {
  const { title, description, image } = content
  return (
    <div className={cx([className, styles.imageContent])}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.sidebar}>
        <h3 className={styles.title}>{capitalize(title)}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
export default ImageContent
