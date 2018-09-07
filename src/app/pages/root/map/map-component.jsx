import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/v2/map';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

class LegendComponent extends PureComponent {
  render() {
    const { className, layers } = this.props;
    return (
      <CesiumMap className={cx(styles.mapContainer, className)}>
        {map => (
          <LayerManager map={map} plugin={PluginCesium}>
            {layerManager => layers.map(l => <Layer key={l.slug} {...l} layerManager={layerManager} />)}
          </LayerManager>
        )}
      </CesiumMap>
    );
  }
}

LegendComponent.propTypes = { layers: PropTypes.array, className: PropTypes.string };

LegendComponent.defaultProps = { layers: [], className: '' };

export default LegendComponent;
