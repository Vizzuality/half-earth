import React from 'react'
import cx from 'classnames'

import styles from './image-content-styles.scss'

const ImageContent = ({ className, content }) => {
  const { description, background, attribution, watermark } = content
  return (
    <figure
      className={cx([className, styles.imageContent])}
      style={{ backgroundImage: `url(${background})` }}
    >
      {watermark && (
        <div
          className={styles.watermark}
          style={{ backgroundImage: `url(${watermark})` }}
        />
      )}
      <figcaption className={styles.description}>{description}</figcaption>
      {attribution && (
        <cite className={styles.attribution}>{`Photo: ${attribution}`}</cite>
      )}
    </figure>
  )
}
export default ImageContent
