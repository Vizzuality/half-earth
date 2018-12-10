import React from 'react';
import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';

import styles from './legend-title-styles.scss';

const legendName = (activeLayer, name) =>
  activeLayer && activeLayer.id === 'gadm-grid' ? 'Country borders' : name;

const LegendTitleComponent = props => {
  const { layers, name, activeLayer } = props;
  return (
    <div className={styles.titleContainer}>
      {
        layers[0].molLogo && (
        <Tooltip
          placement="top"
          overlay={<div>Information from Map of Life</div>}
          overlayClassName="c-rc-tooltip legend-info-tooltip"
        >
          <a
            href={layers[0].logoUrl}
            className={styles.imageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/mol_short_logo.png" alt="logo" />
          </a>
        </Tooltip>
          )
      }
      <div>{legendName(activeLayer, name)}</div>
    </div>
  );
};

LegendTitleComponent.propTypes = {
  activeLayer: PropTypes.shape(),
  name: PropTypes.string.isRequired,
  layers: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

LegendTitleComponent.defaultProps = { activeLayer: null };

export default LegendTitleComponent;
