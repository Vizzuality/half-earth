import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash/throttle';

import CesiumMap from 'components/v2/map';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

class LegendComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.events = {
      [Cesium.ScreenSpaceEventType.LEFT_CLICK]: throttle(this.onMouseClick, 300),
      [Cesium.ScreenSpaceEventType.MOUSE_MOVE]: throttle(this.onMouseMove, 300)
    };
  }

  onMouseClick = (e, position) => {
    console.log(e, position);
  };
  onMouseMove = (e, position) => {
    console.log(e, position);
  };
  render() {
    const { className, layers, updateMapParams } = this.props;
    return (
      <CesiumMap className={cx(styles.mapContainer, className)} onMoveEnd={updateMapParams}>
        {map => (
          <LayerManager map={map} plugin={PluginCesium}>
            {layerManager =>
              layers && layers.map(l => <Layer key={l.slug} {...l} events={this.events} layerManager={layerManager} />)}
          </LayerManager>
        )}
      </CesiumMap>
    );
  }
}

LegendComponent.propTypes = { layers: PropTypes.array, className: PropTypes.string, onMoveEnd: PropTypes.func };

LegendComponent.defaultProps = { layers: [], className: '', onMoveEnd: null };

export default LegendComponent;
