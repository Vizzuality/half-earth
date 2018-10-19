import React from 'react';
import PropTypes from 'prop-types';
import { snakeCase } from 'lodash';

const MolSpeciesLinkComponent = props => {
  const { scientificName, children, className } = props;
  return (
    <a
      className={className}
      href={`https://mol.org/species/${snakeCase(scientificName)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

MolSpeciesLinkComponent.propTypes = {
  scientificName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

MolSpeciesLinkComponent.defaultProps = { className: '' };

export default MolSpeciesLinkComponent;
