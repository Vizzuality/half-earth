import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/cesium/map';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

class LegendComponent extends PureComponent {
  render() {
    const { className, layers } = this.props;
    return (
      <CesiumMap
        ref={map => {
          this.map = map && map.viewer;
        }}
        className={cx(styles.mapContainer, className)}
      >
        {this.map && (
          <LayerManager map={this.map} plugin={PluginCesium}>
            {layerManager =>
              layers.map(l => {
                return <Layer key={l.slug} {...l} layerManager={layerManager} />;
              })
            }
          </LayerManager>
        )}
      </CesiumMap>
    );
  }
}

LegendComponent.propTypes = {
  layers: PropTypes.array,
  className: PropTypes.string
};

LegendComponent.defaultProps = {
  layers: [],
  className: ''
};

export default LegendComponent;
