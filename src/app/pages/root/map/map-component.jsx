import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/v2/map';
import GridLayer from 'components/v2/map/grid-layer';
import { LayerManager, Layer } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

class MapComponent extends PureComponent {
  lastObjId = null;

  map = null;

  primitives = {};

  handleMouseMove = e => {
    if (this.map) {
      const pickedObject = this.map.scene.pick(e.endPosition);
      if (Cesium.defined(pickedObject)) {
        if (pickedObject.id.grid) {
          this.handleGridMove(e, pickedObject);
        }
      } else {
        this.handleNoGridMove();
      }
    }
  };

  handleGridMove = (e, object) => {
    const primitive = this.primitives[object.id.slug];
    if (primitive && (!this.lastObjId || this.lastObjId.cellId !== object.id.cellId)) {
      const attributes = primitive.getGeometryInstanceAttributes(object.id);
      if (attributes) {
        attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.WHITE.withAlpha(0.8));
      }
      if (this.lastObjId) {
        const lastAttributes = primitive.getGeometryInstanceAttributes(this.lastObjId);
        if (lastAttributes) {
          lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.WHITE.withAlpha(0.3));
        }
      }
      this.lastObjId = object.id;
    }
  };

  handleNoGridMove = () => {
    if (this.lastObjId) {
      Object.values(this.primitives).forEach(primitive => {
        const lastAttributes = primitive.getGeometryInstanceAttributes(this.lastObjId);
        if (lastAttributes) {
          lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.WHITE.withAlpha(0.3));
        }
      });
      this.lastObjId = null;
    }
  };

  handleMouseClick = e => {
    if (this.map) {
      const pickedObject = this.map.scene.pick(e.position);
      if (Cesium.defined(pickedObject)) {
        if (pickedObject.id.grid) {
          this.handleGridClick(e, pickedObject);
        }
      } else {
        console.info('No picked object click');
      }
    }
  };

  handleGridClick = (e, object) => {
    const cartesian = this.map.scene.pickPosition(e.position);
    const coordinates = [ cartesian.x, cartesian.y, 5307072.629819246 ];
    const orientation = [ 0.09975939859320615, -0.36280546028605887, 0.00032927908478175283 ];
    this.setMapTerrain(coordinates, orientation, object.id.cellId);
  };

  setMapTerrain = (coordinates, orientation, gridId) => {
    this.props.updateMapParams({ terrain: true, coordinates, orientation, gridId });
  };

  render() {
    const { terrainMode, className, gridLayers, layers, coordinates, coordinatesOptions, updateMapParams } = this.props;
    const hasLayers = layers && layers.length > 0;
    const hasGridLayers = gridLayers && gridLayers.length > 0;
    return (
      <CesiumMap
        className={cx(styles.mapContainer, className)}
        coordinates={coordinates}
        grid={!terrainMode}
        coordinatesOptions={coordinatesOptions}
        onMouseMove={this.handleMouseMove}
        onMouseClick={this.handleMouseClick}
        onMoveEnd={updateMapParams}
      >
        {map => {
          this.map = map;
          return (
            <React.Fragment>
              <LayerManager map={map} plugin={PluginCesium}>
                {layerManager =>
                  hasLayers && layers.map(l => <Layer key={l.slug} {...l} layerManager={layerManager} />)}
              </LayerManager>
              {
                hasGridLayers && gridLayers.map(layer => (
                  <GridLayer key={layer.slug} layer={layer} map={map}>
                    {primitive => {
                        this.primitives[layer.slug] = primitive;
                      }}
                  </GridLayer>
                  ))
              }
            </React.Fragment>
          );
        }}
      </CesiumMap>
    );
  }
}

MapComponent.propTypes = {
  layers: PropTypes.array,
  gridLayers: PropTypes.array,
  terrainMode: PropTypes.bool,
  className: PropTypes.string,
  coordinates: PropTypes.array,
  coordinatesOptions: PropTypes.object,
  updateMapParams: PropTypes.func
};

MapComponent.defaultProps = {
  layers: [],
  gridLayers: [],
  className: '',
  terrainMode: false,
  coordinates: undefined,
  coordinatesOptions: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
