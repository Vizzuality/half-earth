import React from 'react';
import PropTypes from 'prop-types';
import { snakeCase } from 'lodash';

const MolSpeciesLinkComponent = props => {
  const { scientificName, children, className, speciesToWatchAnalyticsEvent } = props;
  return (
    <a
      className={className}
      href={`https://mol.org/species/${snakeCase(scientificName)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => speciesToWatchAnalyticsEvent(scientificName)}
    >
      {children}
    </a>
  );
};

MolSpeciesLinkComponent.propTypes = {
  scientificName: PropTypes.string.isRequired,
  speciesToWatchAnalyticsEvent: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

MolSpeciesLinkComponent.defaultProps = { className: '', children: {} };

export default MolSpeciesLinkComponent;
