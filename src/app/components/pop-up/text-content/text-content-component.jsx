import React from 'react'
import cx from 'classnames'
import capitalize from 'lodash/capitalize'

import styles from './text-content-styles.scss'

const TextContent = ({ className, content }) => {
  const { details, description, image } = content
  return (
    <div className={cx([className, styles.textContent])}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <ul className={styles.details}>
        {details.map(({ label, value }) => (
          <li>
            {capitalize(label)}: {value}
          </li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
export default TextContent
