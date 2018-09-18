import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/v2/map';
import TerrainMode from 'components/v2/terrain';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

const orientation = [ 5.896007025613624, -0.5601371911945909, 0.005147195473025334 ];

class MapComponent extends PureComponent {
  handleMouseClick = (e, { pickedObject = {} }) => {
    const { id } = pickedObject;
    if (id) {
      const coordinates = [ e.position.x, e.position.y, 5050416.44514664 ];
      this.props.updateMapParams({ terrain: true, coordinates, orientation, gridId: id });
    }
  };

  render() {
    const { terrainMode, className, layers, coordinates, coordinatesOptions, updateMapParams } = this.props;
    return (
      <CesiumMap
        className={cx(styles.mapContainer, className)}
        coordinates={coordinates}
        grid={!terrainMode}
        coordinatesOptions={coordinatesOptions}
        onMouseClick={this.handleMouseClick}
        onMoveEnd={updateMapParams}
      >
        {map => terrainMode ? <TerrainMode map={map} /> : (
          <LayerManager map={map} plugin={PluginCesium}>
            {layerManager => layers && layers.map(l => <Layer key={l.slug} {...l} layerManager={layerManager} />)}
          </LayerManager>
)}
      </CesiumMap>
    );
  }
}

MapComponent.propTypes = {
  layers: PropTypes.array,
  terrainMode: PropTypes.bool,
  className: PropTypes.string,
  coordinates: PropTypes.array,
  coordinatesOptions: PropTypes.object,
  updateMapParams: PropTypes.func
};

MapComponent.defaultProps = {
  layers: [],
  className: '',
  terrainMode: false,
  coordinates: undefined,
  coordinatesOptions: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
