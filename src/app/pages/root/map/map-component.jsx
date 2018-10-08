import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CesiumMap from 'components/v2/map';
import GridLayer from 'components/v2/map/grid-layer';
import { LayerManager } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';

import styles from './map-styles.scss';

const SHOW_GRID_HEIGHT = 8000000;
const TERRAIN_CAMERA_OFFSET = new Cesium.HeadingPitchRange(
  Cesium.Math.toRadians(0.0),
  Cesium.Math.toRadians(-27.0),
  200000.0
);

class MapComponent extends PureComponent {
  lastObjId = null;

  map = null;

  gridLayers = {};

  componentWillUpdate(nextProps) {
    const { terrainMode } = this.props;
    if (nextProps.terrainMode && terrainMode === false) {
      this.gridLayers = {};
    }
  }

  handleMouseMove = e => {
    if (this.map) {
      const pickedObject = this.map.scene.pick(e.endPosition);
      if (Cesium.defined(pickedObject)) {
        document.body.style.cursor = 'pointer';
        if (pickedObject.id.grid) {
          this.handleGridMove(e, pickedObject);
        }
      } else {
        document.body.style.cursor = 'default';
        this.handleNoGridMove();
      }
    }
  };

  handleGridMove = (e, object) => {
    const gridLayer = this.gridLayers[object.id.slug];
    const { primitive } = gridLayer;
    if (primitive && (!this.lastObjId || this.lastObjId.cellId !== object.id.cellId)) {
      const attributes = primitive.getGeometryInstanceAttributes(object.id);
      if (attributes) {
        attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
          Cesium.Color.fromBytes(24, 186, 180, 100)
        );
      }
      if (this.lastObjId) {
        const lastGridLayer = this.gridLayers[this.lastObjId.slug];
        const lastAttributes = lastGridLayer &&
          lastGridLayer.primitive.getGeometryInstanceAttributes(this.lastObjId);
        if (lastAttributes) {
          lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
            Cesium.Color.WHITE.withAlpha(0.01)
          );
        }
      }
      this.lastObjId = object.id;
    }
  };

  handleNoGridMove = () => {
    if (this.lastObjId) {
      Object
        .values(this.gridLayers)
        .filter(gl => !!gl)
        .forEach(({ primitive }) => {
          const lastAttributes = primitive &&
            primitive.getGeometryInstanceAttributes &&
            primitive.getGeometryInstanceAttributes(this.lastObjId);
          if (lastAttributes) {
            lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
              Cesium.Color.WHITE.withAlpha(0.3)
            );
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
          this.handleGridClick(pickedObject);
        }
      } else {
        console.info('No picked object click');
      }
    }
  };

  handleGridClick = object => {
    this.setMapTerrain(TERRAIN_CAMERA_OFFSET, object.id);
  };

  setMapTerrain = (terrainCameraOffset, { cellId, coordinates }) => {
    const { query, updateMapParams } = this.props;
    const activeLayers = query.activeLayers ? query.activeLayers
        .filter(l => l.layerCategory !== 'terrestrial' && l.layerCategory !== 'aquatic')
        .map(l => ({ ...l, opacity: l.landscapeOpacity || l.opacity })) : null;
    updateMapParams({
      terrain: true,
      activeLayers,
      terrainCameraOffset,
      cellCoordinates: coordinates,
      cellId
    });
  };

  render() {
    const {
      terrainMode,
      className,
      gridLayers,
      layers,
      coordinates,
      coordinatesOptions,
      updateMapParams,
      terrainCameraOffset,
      cellCoordinates
    } = this.props;
    const hasLayers = layers && layers.length > 0;
    const hasGridLayers = gridLayers && gridLayers.length > 0;
    return (
      <CesiumMap
        className={cx(styles.mapContainer, className)}
        coordinates={coordinates}
        terrainMode={terrainMode}
        coordinatesOptions={coordinatesOptions}
        terrainCameraOffset={terrainCameraOffset}
        cellCoordinates={cellCoordinates}
        onMouseMove={this.handleMouseMove}
        onMouseClick={this.handleMouseClick}
        onMoveEnd={updateMapParams}
      >
        {map => {
          this.map = map;
          const height = map.camera.getMagnitude();
          const showGrid = !terrainMode && height < SHOW_GRID_HEIGHT;
          return (
            <React.Fragment>
              {hasLayers && <LayerManager map={map} plugin={PluginCesium} layersSpec={layers} />}
              {
                hasGridLayers && gridLayers.map(layer => (
                  <GridLayer
                    key={layer.id}
                    show={showGrid}
                    layer={layer}
                    map={map}
                    ref={gridLayer => {
                        this.gridLayers[layer.id] = gridLayer;
                      }}
                  />
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
  query: PropTypes.object,
  layers: PropTypes.array,
  gridLayers: PropTypes.array,
  terrainMode: PropTypes.bool,
  className: PropTypes.string,
  coordinates: PropTypes.object,
  coordinatesOptions: PropTypes.object,
  terrainCameraOffset: PropTypes.object,
  cellCoordinates: PropTypes.array,
  updateMapParams: PropTypes.func
};

MapComponent.defaultProps = {
  query: null,
  layers: [],
  gridLayers: [],
  className: '',
  terrainMode: false,
  coordinates: undefined,
  coordinatesOptions: undefined,
  terrainCameraOffset: undefined,
  cellCoordinates: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
