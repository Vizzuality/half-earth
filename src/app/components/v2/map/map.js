import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { mapValues } from 'lodash';
import CesiumMapComponent from './map-component';

// const { MAPBOX_TOKEN } = process.env;
const { Cesium } = window;
const mapId = `map-${new Date().getTime()}`;

const disablePanning = v => {
  const { scene } = v;
  scene.screenSpaceCameraController.enableRotate = false;
  scene.screenSpaceCameraController.enableTranslate = false;
  scene.screenSpaceCameraController.enableZoom = false;
  scene.screenSpaceCameraController.enableTilt = false;
  scene.screenSpaceCameraController.enableLook = false;
  return v;
};

class CesiumComponent extends Component {
  static mapConfig = {
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    creditsDisplay: false,
    fullscreenButton: false,
    terrainExaggeration: 2.0,
    terrainProvider: Cesium.createWorldTerrain()
  };

  rotating = false;

  ticking = false;

  distance = 0;

  componentDidMount() {
    const { coordinates, camera } = this.props;
    this.viewer = new Cesium.Viewer(mapId, CesiumComponent.mapConfig);
    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);

    if (coordinates) this.setCoordinates();
    if (camera) this.setCamera();
    this.setEventListeners();
    this.forceUpdate(); // Doing this to notify childrens it is ready
  }

  componentDidUpdate(prevProps) {
    const {
      onTick,
      lockNavigation = false,
      rotate,
      coordinates,
      coordinatesOptions,
      camera,
      terrainMode,
      terrainCameraOffset,
      cellCoordinates
    } = this.props;
    if (this.viewer) {
      if (!this.rotating && rotate) this.addRotation();
      if (this.rotating && !rotate) this.removeRotation();
      if (onTick && !this.ticking) this.addTick();
      if (camera && prevProps.camera !== camera) this.setCamera();
      if (lockNavigation) disablePanning(this.viewer);
      if (terrainMode) {
        if (cellCoordinates) {
          this.renderGridCell(cellCoordinates);
          this.setTerrainModeView(cellCoordinates, terrainCameraOffset);
        }
      } else {
        const coordinatesChanged = coordinates && prevProps.coordinates !== coordinates ||
          prevProps.coordinatesOptions !== coordinatesOptions;
        const terrainModeChanged = prevProps.terrainMode !== terrainMode;
        if (coordinatesChanged || terrainModeChanged) {
          this.removeGridCell();
          this.setCoordinates();
        }
      }
    }
  }

  componentWillUnmount() {
    this.removeTicking();
    this.removeRotation();
  }

  setEventListeners() {
    if (this.props.onMouseMove) {
      this.handler.setInputAction(this.props.onMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }
    if (this.props.onMouseClick) {
      this.handler.setInputAction(this.props.onMouseClick, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    if (this.props.onMoveEnd) {
      this.viewer.camera.moveEnd.addEventListener(this.handleMoveEnd);
    }
  }

  onTick = clock => {
    if (this.rotating) this.rotate(clock);
    const cameraPosition = this.viewer.scene.camera.positionWC;
    const ellipsoidPosition = this.viewer.scene.globe.ellipsoid.scaleToGeodeticSurface(
      cameraPosition
    );
    const distance = Cesium.Cartesian3.magnitude(
      Cesium.Cartesian3.subtract(cameraPosition, ellipsoidPosition, new Cesium.Cartesian3())
    );
    if (distance !== this.distance) {
      this.props.onTick({ distance });
      this.distance = distance;
    }
  };

  renderGridCell(cellCoordinates) {
    const coordinates = Cesium.Rectangle.fromCartesianArray(cellCoordinates);
    this.rectangle = new Cesium.Entity({
      rectangle: {
        coordinates,
        fill: false,
        outline: true,
        outlineWidth: 5.0,
        outlineColor: Cesium.Color.fromAlpha(Cesium.Color.WHITE, 0.9)
      }
    });
    this.viewer.entities.add(this.rectangle);
  }

  setTerrainModeView(cellCoordinates, terrainCameraOffset) {
    const rectangle = Cesium.Rectangle.fromCartesianArray(cellCoordinates);
    this.sphere = Cesium.BoundingSphere.fromRectangle3D(rectangle);
    const offset = mapValues(terrainCameraOffset.offset, parseFloat);
    this.viewer.camera.flyToBoundingSphere(this.sphere, offset);
  }

  removeGridCell() {
    if (this.rectangle) {
      this.viewer.entities.remove(this.rectangle);
    }
    this.rectangle = undefined;
  }

  setCoordinates() {
    const { coordinates, coordinatesOptions } = this.props;
    this.flyTo(coordinates, coordinatesOptions);
  }

  setCamera() {
    const { camera } = this.props;
    Object.assign(this.viewer.camera, camera);
  }

  handleMoveEnd = () => {
    const { coordinates = [], coordinatesOptions = {}, terrainMode } = this.props;
    const { orientation = {} } = coordinatesOptions;
    const { x, y, z } = this.viewer.camera.position;
    const { heading, pitch, roll } = this.viewer.camera;
    const isDifferentCoordinates = coordinates[0] !== x ||
      coordinates[1] !== y ||
      coordinates[2] !== z;
    const isDifferentOrientation = orientation.heading !== heading ||
      orientation.pitch !== pitch ||
      orientation.roll !== roll;

    if ((isDifferentCoordinates || isDifferentOrientation) && !terrainMode) {
      this.props.onMoveEnd({ coordinates: { x, y, z }, orientation: [ heading, pitch, roll ] });
    }
  };

  rotate = clock => {
    const { startTime, currentTime } = clock;
    const lastNow = startTime.secondsOfDay;
    const now = currentTime.secondsOfDay;
    const spinRate = 0.8;
    const delta = (now - lastNow) / 1000;
    this.viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, (-spinRate) * delta);
    clock.startTime.secondsOfDay = now - 1; // eslint-disable-line
  };

  flyTo(destination, rest = {}) {
    this.viewer.camera.flyTo({ destination, ...rest });
  }

  addRotation() {
    this.viewer.clock.onTick.addEventListener(this.onTick);
    this.rotating = true;
  }

  addTick() {
    this.viewer.clock.onTick.addEventListener(this.onTick);
    this.ticking = true;
  }

  removeRotation() {
    this.viewer.clock.onTick.removeEventListener(this.onTick);
    this.rotating = false;
  }

  removeTicking() {
    this.viewer.clock.onTick.removeEventListener(this.onTick);
    this.ticking = false;
  }

  render() {
    return createElement(CesiumMapComponent, { mapId, viewer: this.viewer, ...this.props });
  }
}

CesiumComponent.propTypes = {
  onTick: PropTypes.func,
  onMoveEnd: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseClick: PropTypes.func,
  lockNavigation: PropTypes.bool,
  rotate: PropTypes.func,
  coordinates: PropTypes.object,
  coordinatesOptions: PropTypes.object,
  camera: PropTypes.object,
  terrainMode: PropTypes.bool,
  terrainCameraOffset: PropTypes.object,
  cellCoordinates: PropTypes.object
};

CesiumComponent.defaultProps = {
  onTick: null,
  onMoveEnd: () => {
  },
  onMouseMove: () => {
  },
  onMouseClick: () => {
  },
  rotate: null,
  lockNavigation: false,
  coordinates: undefined,
  coordinatesOptions: undefined,
  camera: null,
  terrainMode: false,
  terrainCameraOffset: undefined,
  cellCoordinates: undefined
};

export default CesiumComponent;
