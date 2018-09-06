import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/cesium/map';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

class LegendComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mapReady: false
    };
    // Instance of the map passed as a callback
    this.map = null;
  }

  setMapReady = map => {
    this.map = map;
    this.setState({ mapReady: true });
  };

  render() {
    const { mapReady } = this.state;
    const { className, layers } = this.props;
    return (
      <CesiumMap onReady={this.setMapReady} className={cx(styles.mapContainer, className)}>
        {mapReady &&
          this.map && (
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
