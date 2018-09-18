import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/v2/map';
import TerrainMap from 'components/v2/terrain';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

const orientation = [6.283185307179586,-1.5690271475958233,0];

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showTerrain: false,
      terrainCoordinates: null
    }
  }

  handleMouseClick = (e, params) => {
    console.info(e, params);
    this.setState({
      showTerrain: true,
      terrainCoordinates: [e.position.x, e.position.y, 5050416.44514664]
    })
  };

  render() {
    const { showTerrain, terrainCoordinates } = this.state;
    const { className, layers, coordinates, coordinatesOptions, updateMapParams } = this.props;
    return showTerrain
      ? <TerrainMap coordinates={terrainCoordinates} orientation={orientation} />
      : (
        <CesiumMap
          className={cx(styles.mapContainer, className)}
          coordinates={coordinates}
          showTerrain={showTerrain}
          terrainCoordinates={terrainCoordinates}
          coordinatesOptions={coordinatesOptions}
          onMouseClick={this.handleMouseClick}
          onMoveEnd={updateMapParams}
        >
          {map => (
            <LayerManager map={map} plugin={PluginCesium}>
              {layerManager =>
                layers && layers.map(l => <Layer key={l.slug} {...l} layerManager={layerManager} />)}
            </LayerManager>
          )}
        </CesiumMap>
      );
  }
}

MapComponent.propTypes = {
  layers: PropTypes.array,
  className: PropTypes.string,
  coordinates: PropTypes.array,
  coordinatesOptions: PropTypes.object,
  updateMapParams: PropTypes.func
};

MapComponent.defaultProps = {
  layers: [],
  className: '',
  coordinates: undefined,
  coordinatesOptions: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
