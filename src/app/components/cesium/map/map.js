import { Component, createElement } from 'react';
import throttle from 'lodash/throttle';
import CesiumMapComponent from './map-component';

const { MAPBOX_TOKEN } = process.env;
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
    skyAtmosphere: false,
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`
    })
  };
  rotating = false;
  ticking = false;
  distance = 0;
  state = {
    clickedPosition: null,
    hoverPosition: { x: 0, y: 0 }
  };

  componentDidMount() {
    this.viewer = new Cesium.Viewer(mapId, CesiumComponent.mapConfig);
    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    this.setEventHandlers();
    this.setCoordinates();
    this.setCamera();
  }

  componentDidUpdate() {
    const { onTick, lockNavigation, rotate, coordinates, camera } = this.props;

    this.state.clickedPosition = null;
    if (this.viewer) {
      if (!this.rotating && rotate) this.addRotation();
      if (this.rotating && !rotate) this.removeRotation();
      if (onTick && !this.ticking) this.addTick();
      if (coordinates) this.setCoordinates();
      if (camera) this.setCamera();
      if (lockNavigation) disablePanning(this.viewer);
    }
  }

  componentWillUnmount() {
    this.removeTicking();
    this.removeRotation();
  }

  setEventHandlers() {
    this.handler.setInputAction(
      this.onMouseClick,
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    );
    this.handler.setInputAction(
      this.onMouseMove,
      Cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
  }

  setCoordinates() {
    const [xyz, options] = this.props.coordinates;
    this.flyTo(...xyz, options);
  }

  setCamera() {
    const { camera } = this.props;
    Object.assign(this.viewer.camera, camera);
  }

  flyTo(lat, long, z = 15000.0, rest = {}) {
    this.viewer.camera.flyTo({ destination: { x: lat, y: long, z }, ...rest });
  }

  rotate = clock => {
    const { startTime, currentTime } = clock;
    const lastNow = startTime.secondsOfDay;
    const now = currentTime.secondsOfDay;
    const spinRate = 0.8;
    const delta = (now - lastNow) / 1000;
    this.viewer.scene.camera.rotate(
      Cesium.Cartesian3.UNIT_Z,
      -spinRate * delta
    );
    clock.startTime.secondsOfDay = now - 1;
  };

  onTick = clock => {
    if (this.rotating) this.rotate(clock);
    const cameraPosition = this.viewer.scene.camera.positionWC;
    const ellipsoidPosition = this.viewer.scene.globe.ellipsoid.scaleToGeodeticSurface(
      cameraPosition
    );
    const distance = Cesium.Cartesian3.magnitude(
      Cesium.Cartesian3.subtract(
        cameraPosition,
        ellipsoidPosition,
        new Cesium.Cartesian3()
      )
    );
    if (distance !== this.distance) {
      this.props.onTick({ distance });
      this.distance = distance;
    }
  };

  onMouseClick = click => {
    const { onMouseClick } = this.props;
    if (onMouseClick) {
      onMouseClick({
        position: click.position
      });
    }
    this.setState({ clickedPosition: click.position });
  };

  onMouseMove = throttle(mouse => {
    const { onMouseMove } = this.props;
    if (onMouseMove) {
      onMouseMove({
        position: mouse.startPosition
      });
    }
    this.setState({ hoverPosition: mouse.startPosition });
  }, 200);

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
    const { clickedPosition, hoverPosition } = this.state;

    return createElement(CesiumMapComponent, {
      mapId,
      layersCollection: this.viewer && this.viewer.imageryLayers,
      viewer: this.viewer,
      clickedPosition,
      hoverPosition,
      ...this.props
    });
  }
}

export default CesiumComponent;
