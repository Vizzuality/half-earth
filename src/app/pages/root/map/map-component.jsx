import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CesiumMap from 'components/v2/map';
import GridLayer from 'components/v2/map/grid-layer';
import ProtectedAreasLayer from 'components/v2/map/protected-areas-layer';
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

  hasLayers = layers => layers && layers.length > 0;

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
        switch (pickedObject.id.type) {
          case 'grid':
            this.handleGridHover(e, pickedObject);
            break;
          case 'protected-area':
            this.handleProtectedAreaHover(pickedObject);
            break;
          default:
            this.handleNoGridMove();
        }
      } else {
        this.handleNoGridMove();
      }
    }
  };

  handleGridHover = (e, object) => {
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
  // console.log(object)

  handleProtectedAreaHover = object => {
    const { primitive } = object;
    const attributes = primitive.getGeometryInstanceAttributes(object.id);
    if (attributes) {
      attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
        Cesium.Color.fromCssColorString(object.id.color).withAlpha(0.3)
      );
    }
    this.lastObjId = object.id;
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
        switch (pickedObject.id.type) {
          case 'grid':
            this.handleGridClick(pickedObject);
            break;
          case 'protected-area':
            this.handleProtectedAreaClick(pickedObject);
            break;
          default:
            console.info('Unknown entity type');
        }
      } else {
        console.info('No picked object click');
      }
    }
  };

  handleGridClick = object => {
    this.setMapTerrain(TERRAIN_CAMERA_OFFSET, object.id);
  };

  handleProtectedAreaClick = object => {
    console.warn(object);
  };

  setMapTerrain = (terrainCameraOffset, { cellId, coordinates }) => {
    const { query } = this.props;
    const activeLayers = query.activeLayers
      ? query.activeLayers.filter(
        l => l.layerCategory !== 'terrestrial' && l.layerCategory !== 'aquatic'
      )
      : null;
    this.props.updateMapParams({
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
      layers,
      gridLayers,
      protectedAreasLayer,
      coordinates,
      coordinatesOptions,
      updateMapParams,
      terrainCameraOffset,
      cellCoordinates
    } = this.props;
    const hasActiveLayers = this.hasLayers(layers);
    const hasGridLayers = this.hasLayers(gridLayers);
    const hasProtectedAreasLayer = this.hasLayers(protectedAreasLayer);
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
              {
                hasActiveLayers &&
                  <LayerManager map={map} plugin={PluginCesium} layersSpec={layers} />
              }
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
              {
                terrainMode &&
                  hasProtectedAreasLayer &&
                  <ProtectedAreasLayer map={this.map} layer={protectedAreasLayer[0]} />
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
  protectedAreasLayer: PropTypes.array,
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
  protectedAreasLayer: [],
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
