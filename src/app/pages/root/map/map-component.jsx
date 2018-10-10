import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CesiumMap from 'components/v2/map';
import GridLayer from 'components/v2/map/grid-layer';
import ProtectedAreasLayer from 'components/v2/map/protected-areas-layer';
import StoriesLayer from 'components/v2/map/stories-layer';
import PlacesLayer from 'components/v2/map/places-layer';
import { LayerManager } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';
import MapTooltip from 'components/v2/map-tooltip';

import styles from './map-styles.scss';

const SHOW_GRID_HEIGHT = 8000000;
const TERRAIN_CAMERA_OFFSET = new Cesium.HeadingPitchRange(
  Cesium.Math.toRadians(0.0),
  Cesium.Math.toRadians(-27.0),
  200000.0
);

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    // config for map primitives
    this.lastObjId = null;
    this.lastMarkerHovered = null;
    this.activeMarker = null;
    this.tooltipInitialPosition = null;

    this.gridLayers = {};
  }

  hasLayers = layers => layers && layers.length > 0;

  componentWillUpdate(nextProps) {
    const { terrainMode } = this.props;
    if (nextProps.terrainMode && terrainMode === false) {
      this.gridLayers = {};
    }
  }

  handleMouseMove = e => {
    if (this.map) {
      const { scene } = this.map;
      const pickedObject = scene.pick(e.endPosition);
      if (Cesium.defined(pickedObject)) {
        document.body.style.cursor = 'pointer';
        switch (pickedObject.id.type) {
          case 'grid':
            this.handleGridHover(e, pickedObject);
            break;
          case 'protected-area':
            this.handleProtectedAreaHover(pickedObject);
            break;
          case 'story':
            this.handleMarkerHovered(pickedObject);
            break;
          case 'place':
            this.handleMarkerHovered(pickedObject);
            break;
          default:
            document.body.style.cursor = 'default';
            this.handleNoEntityHover();
        }
      } else {
        document.body.style.cursor = 'default';
        this.handleNoEntityHover();
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

  handleMarkerHovered = marker => {
    const { primitive, id } = marker;
    primitive.setImage(id.markerHoverImage, id.markerHoverImage);
    this.lastMarkerHovered = marker;
  };

  handleNoEntityHover = () => {
    document.body.style.cursor = 'default';
    if (this.lastMarkerHovered) {
      const { primitive, id } = this.lastMarkerHovered;
      primitive.setImage(id.markerImage, id.markerImage);
    }
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
          // case 'protected-area':
          //   this.handleProtectedAreaClick(pickedObject, e.position);
          //   break;
          case 'story':
            this.handleMarkerClick(pickedObject, e);
            break;
          case 'place':
            this.handleMarkerClick(pickedObject, e);
            break;
          default:
            console.info('Unknown entity type');
        }
      } else {
        console.info('No picked object click');
      }
    }
  };

  getDestinationCoordsFromClick = (x, y, height = 5000000.0) => {
    const cartesian = this.map.camera.pickEllipsoid(new Cesium.Cartesian2(x, y));
    const { longitude, latitude } = this.map.scene.globe.ellipsoid.cartesianToCartographic(
      cartesian
    );
    return Cesium.Cartesian3.fromDegrees(
      Cesium.Math.toDegrees(longitude),
      Cesium.Math.toDegrees(latitude),
      height
    );
  };

  handleDoubleClick = e => {
    const { updateMapParams } = this.props;
    if (this.map) {
      const coordinates = this.getDestinationCoordsFromClick(e.position.x, e.position.y, 1000000.0);
      updateMapParams({ coordinates });
    }
  };

  handleGridClick = object => {
    this.setMapTerrain(object.id.cellId, object.id.coordinates);
  };

  handleMarkerClick = (object, e) => {
    const { updateMapParams } = this.props;
    // clear previous marker
    this.removeTooltip();
    const { x, y } = e.position;
    this.activeMarker = object.id;
    const coordinates = this.getDestinationCoordsFromClick(x, y - 100);
    updateMapParams({ activeMarker: object.id.id, coordinates });
  };

  removeTooltip = () => {
    const { updateMapParams } = this.props;
    updateMapParams({ activeMarker: undefined });
  };

  setMapTerrain = (cellId, coordinates, terrainCameraOffset = TERRAIN_CAMERA_OFFSET) => {
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
      layers,
      gridLayers,
      protectedAreasLayer,
      coordinates,
      coordinatesOptions,
      updateMapParams,
      terrainCameraOffset,
      cellCoordinates,
      activeMarker
    } = this.props;
    const hasActiveLayers = this.hasLayers(layers);
    const hasGridLayers = this.hasLayers(gridLayers);
    const hasProtectedAreasLayer = this.hasLayers(protectedAreasLayer);
    const isStoriesActive = this.hasLayers(layers) && layers.some(l => l.id === 'stories');
    const isPlacesActive = this.hasLayers(layers) && layers.some(l => l.id === 'places-to-watch');
    const tooltipData = activeMarker && this.activeMarker;
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
        onDoubleClick={this.handleDoubleClick}
        onMoveStart={this.handleMapMoveStart}
        onCameraChanged={this.handleCameraChanged}
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
              {isStoriesActive && <StoriesLayer map={this.map} show={isStoriesActive} />}
              {
                isPlacesActive &&
                  !terrainMode &&
                  (
                    <PlacesLayer
                      map={this.map}
                      show={isPlacesActive}
                      handleActionClick={this.setMapTerrain}
                    />
                  )
              }
              {
                tooltipData &&
                  (
                    <MapTooltip
                      type={tooltipData.type}
                      title={tooltipData.title}
                      text={tooltipData.text}
                      image={tooltipData.image}
                      url={tooltipData.url}
                      handleTooltipClose={this.removeTooltip}
                      map={this.map}
                      cellId={tooltipData.cellId}
                      {...tooltipData}
                    />
                  )
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
  activeMarker: PropTypes.string,
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
  activeMarker: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
