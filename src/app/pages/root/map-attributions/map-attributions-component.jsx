import React from 'react';
import PropTypes from 'prop-types';

import styles from './map-attributions-styles.scss';

const MapAttributionComponent = props => {
  const { attributions } = props;
  return (
    <div className={styles.attributionsContainer}>
      {attributions.map(att => (
        <a
          key={att.alt}
          href={att.href}
          className={styles.att}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={att.src} alt={att.alt} />
        </a>
      ))}
    </div>
  );
};

MapAttributionComponent.propTypes = {
  attributions: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MapAttributionComponent;
