import React from 'react';
import cx from 'classnames';
import capitalize from 'lodash/capitalize';

import styles from './text-content-styles.scss';

const TextContent = ({ className, content }) => {
  const { details, description, image, background } = content;
  return (
    <div
      className={cx([className, styles.textContent])}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <ul className={styles.details}>
        {details.map(({ label, value }, key) => (
          <li key={`details-item-${key}`}>
            {capitalize(label)}: {value}
          </li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default TextContent;
