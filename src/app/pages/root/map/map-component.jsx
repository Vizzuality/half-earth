import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CesiumMap from 'components/v2/map';
import GridLayer from 'components/v2/map/grid-layer';
import ProtectedAreasLayer from 'components/v2/map/protected-areas-layer';
import StoriesLayer from 'components/v2/map/stories-layer';
import PlacesLayer from 'components/v2/map/places-layer';
import PledgesLayer from 'components/v2/map/pledges-layer';
import ZoomControls from 'components/v2/map/zoom-controls';
import { LayerManager } from 'layer-manager/dist/react';
import { PluginCesium } from 'layer-manager';
import MapTooltip from 'components/v2/map-tooltip';
import ProtectedAreasTooltip from 'components/v2/protected-areas-tooltip';

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
      const outOfBounds = e.endPosition.x < 7 || e.endPosition.y < 7;
      const pickedObject = scene.pick(e.endPosition);
      if (outOfBounds) {
        this.handleOutOfBoundsHover(scene);
      }
      if (Cesium.defined(pickedObject) && !outOfBounds) {
        document.body.style.cursor = 'pointer';
        switch (pickedObject.id.type) {
          case 'grid':
            this.handleGridHover(e, pickedObject, scene);
            break;
          case 'protected-area':
            document.body.style.cursor = 'pointer';
            break;
          case 'story':
            this.handleMarkerHovered(pickedObject);
            break;
          case 'place':
            this.handleMarkerHovered(pickedObject);
            break;
          default:
            document.body.style.cursor = 'grab';
            this.handleNoEntityHover();
        }
      } else {
        document.body.style.cursor = 'grab';
        this.handleOutOfBoundsHover(scene);
      }
    }
  };

  handleGridHover = (e, object, scene) => {
    const gridLayer = this.gridLayers[object.id.slug];
    const { primitive } = gridLayer;
    const { activeGridCellId } = this.props;
    if (activeGridCellId === object.id.cellId) {
      document.body.style.cursor = 'default';
    }
    if (primitive && (!this.lastObjId || this.lastObjId.cellId !== object.id.cellId)) {
      const attributes = primitive.getGeometryInstanceAttributes(object.id);
      if (attributes && activeGridCellId !== object.id.cellId) {
        attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
          Cesium.Color.fromBytes(24, 186, 180, 100)
        );
        scene.requestRender();
      }
      if (this.lastObjId) {
        const lastGridLayer = this.gridLayers[this.lastObjId.slug];
        const lastAttributes = lastGridLayer &&
          lastGridLayer.primitive.getGeometryInstanceAttributes(this.lastObjId);
        if (lastAttributes) {
          lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
            Cesium.Color.WHITE.withAlpha(0.01)
          );
          scene.requestRender();
        }
      }
      this.lastObjId = object.id;
    }
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

  handleOutOfBoundsHover = scene => {
    this.cleanGridEntities(scene);
  };

  cleanGridEntities = scene => {
    if (this.lastObjId) {
      const lastGridLayer = this.gridLayers[this.lastObjId.slug];
      const lastAttributes = lastGridLayer &&
        lastGridLayer.primitive.getGeometryInstanceAttributes(this.lastObjId);
      if (lastAttributes) {
        lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(
          Cesium.Color.WHITE.withAlpha(0.01)
        );
        scene.requestRender();
      }
    }
    this.lastObjId = null;
  };

  handleMouseClick = e => {
    if (this.map) {
      const pickedObject = this.map.scene.pick(e.position);
      const entitiesArray = this.map.scene.drillPick(e.position);
      this.removeReservesTooltip();
      if (entitiesArray.some(en => en.id.type === 'protected-area')) {
        this.handleProtectedAreaClick(e);
      }
      if (Cesium.defined(pickedObject)) {
        switch (pickedObject.id.type) {
          case 'protected-area':
            this.handleProtectedAreaClick(e);
            break;
          case 'grid':
            this.handleGridClick(pickedObject);
            break;
          case 'story':
            this.handleMarkerClick(pickedObject, e);
            break;
          case 'place':
            this.handleMarkerClick(pickedObject, e);
            break;
          default:
            document.body.style.cursor = 'grabbing';
            console.info('Unknown entity type');
        }
      } else {
        document.body.style.cursor = 'grabbing';
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
    // if we are clicking in th active grid cell do nothing
    const { activeGridCellId } = this.props;
    if (activeGridCellId && activeGridCellId === object.id.cellId) return null;
    this.setMapTerrain(object.id.cellId, object.id.coordinates);
    return object.id.cellId;
  };

  handleProtectedAreaClick = e => {
    const { updateMapParams } = this.props;
    this.removeReservesTooltip();
    const reserves = this.map.scene
      .drillPick(e.position)
      .filter(r => r.id.type === 'protected-area');
    const { x, y } = e.position;
    this.reservesTooltip = { x, y, reserves: reserves.map(r => r.id) };
    updateMapParams({ reservesTooltip: true });
  };

  removeReservesTooltip = () => {
    const { updateMapParams } = this.props;
    updateMapParams({ reservesTooltip: false });
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
      protectedAreasAcive,
      protectedAreasLayers,
      coordinates,
      coordinatesOptions,
      updateMapParams,
      terrainCameraOffset,
      cellCoordinates,
      activeMarker,
      reservesTooltip,
      zoomControls
    } = this.props;
    const hasActiveLayers = this.hasLayers(layers);
    const hasGridLayers = this.hasLayers(gridLayers);
    const hasProtectedAreasLayer = this.hasLayers(protectedAreasAcive);
    const isStoriesActive = this.hasLayers(layers) && layers.some(l => l.id === 'stories');
    const isPlacesActive = this.hasLayers(layers) && layers.some(l => l.id === 'places-to-watch');
    const pledgesLayer = this.hasLayers(layers) && layers.find(l => l.id === 'signed-pledges');
    const tooltipData = activeMarker && this.activeMarker;
    const reservesTooltipData = reservesTooltip && this.reservesTooltip;
    return (
      <CesiumMap
        className={cx(styles.mapContainer, className)}
        layers={layers}
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
          const showGrid = terrainMode || height < SHOW_GRID_HEIGHT;

          return (
            <React.Fragment>
              {zoomControls && <ZoomControls map={map} className={styles.zoomControls} />}
              {
                hasActiveLayers &&
                  <LayerManager map={map} plugin={PluginCesium} layersSpec={layers} />
              }
              {
                terrainMode &&
                  hasProtectedAreasLayer &&
                  (
                    <ProtectedAreasLayer
                      map={map}
                      conservationAreasActive={protectedAreasAcive}
                      layers={protectedAreasLayers}
                      gridCellCoordinates={cellCoordinates}
                    />
                  )
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
              {isStoriesActive && <StoriesLayer map={this.map} show={isStoriesActive} />}
              {pledgesLayer && <PledgesLayer map={this.map} show={pledgesLayer.visibility} />}
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
              {reservesTooltip && terrainMode && <ProtectedAreasTooltip {...reservesTooltipData} />}
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
  protectedAreasAcive: PropTypes.array,
  protectedAreasLayers: PropTypes.array,
  terrainMode: PropTypes.bool,
  zoomControls: PropTypes.bool,
  className: PropTypes.string,
  coordinates: PropTypes.object,
  coordinatesOptions: PropTypes.object,
  terrainCameraOffset: PropTypes.object,
  cellCoordinates: PropTypes.array,
  activeMarker: PropTypes.string,
  reservesTooltip: PropTypes.bool,
  activeGridCellId: PropTypes.string,
  updateMapParams: PropTypes.func
};

MapComponent.defaultProps = {
  query: null,
  layers: [],
  gridLayers: [],
  protectedAreasAcive: [],
  protectedAreasLayers: [],
  className: '',
  terrainMode: false,
  zoomControls: false,
  coordinates: undefined,
  coordinatesOptions: undefined,
  terrainCameraOffset: undefined,
  cellCoordinates: undefined,
  activeMarker: undefined,
  reservesTooltip: false,
  activeGridCellId: undefined,
  updateMapParams: () => {
  }
};

export default MapComponent;
