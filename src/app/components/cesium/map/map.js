import { Component, createElement } from 'react';
import isEqual from 'lodash/isEqual';
import throttle from 'lodash/throttle';
import CesiumMapComponent from './map-component';

const { MAPBOX_TOKEN } = process.env;
const { Cesium } = window;
const mapId = `map-${new Date().getTime()}`;

const bindFlyTo = v => (lat, long, z = 15000.0, rest = {}) =>
  v.camera.flyTo({ destination: { x: lat, y: long, z }, ...rest });

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
  rotating = false;
  distance = 0;
  ticking = false;
  state = {
    layers: {},
    viewer: null,
    clickedPosition: null,
    hoverPosition: { x: 0, y: 0 }
  };

  mountMap () {
    const mapConfig = {
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

    const viewer = new Cesium.Viewer(mapId, mapConfig);
    this.flyTo = bindFlyTo(viewer);
    this.handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

    return viewer;
  }

  bindMap (props) {
    const viewer = this.mountMap(props);
    const layers = Object.keys(this.state.layers).length
      ? this.state.layers
      : viewer.imageryLayers;
    this.setEventHandlers();
    this.setState({ layers, viewer });
  }

  setEventHandlers () {
    this.handler.setInputAction(
      this.onMouseClick,
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    );
    this.handler.setInputAction(
      this.onMouseMove,
      Cesium.ScreenSpaceEventType.MOUSE_MOVE
    );
  }

  componentDidMount () {
    const { zoom, onTick, lockNavigation } = this.props;
    this.bindMap(this.props);
    if (zoom) this.handleZoom(zoom);
    if (onTick) this.addTick();
    if (lockNavigation) return disablePanning(this.state.viewer);
  }

  componentWillUnmount () {
    this.removeTicking();
    this.removeRotation();
  }

  componentWillReceiveProps (props) {
    if (this.props.zoom !== props.zoom) {
      this.handleZoom(props.zoom);
    }
  }

  handleZoom (zoom) {
    const {
      state: { viewer }
    } = this;
    const [zLevel, opts, cameraProps] = zoom;
    if (zLevel && !isEqual(zoom, this.zLevel)) {
      this.flyTo(...zLevel, opts);
      this.zLevel = zoom;
    }

    if (viewer && cameraProps) {
      Object.assign(viewer.camera, cameraProps);
    }
  }

  rotate = clock => {
    const { startTime, currentTime } = clock;
    const { viewer } = this.state;
    const lastNow = startTime.secondsOfDay;
    const now = currentTime.secondsOfDay;
    const spinRate = 0.8;
    const delta = (now - lastNow) / 1000;
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta);
    clock.startTime.secondsOfDay = now - 1;
  };

  onTick = clock => {
    const { viewer } = this.state;

    if (this.rotating) this.rotate(clock);
    const cameraPosition = viewer.scene.camera.positionWC;
    const ellipsoidPosition = viewer.scene.globe.ellipsoid.scaleToGeodeticSurface(
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
      this.props.onTick({
        distance
      });
      this.distance = distance;
    }
  };

  onMouseClick = click => {
    this.props.onMouseClick &&
      this.props.onMouseClick({
        position: click.startPosition
      });
    this.setState({ clickedPosition: click.position });
  };

  onMouseMove = throttle(mouse => {
    this.props.onMouseMove &&
      this.props.onMouseMove({
        position: mouse.startPosition
      });
    this.setState({ hoverPosition: mouse.startPosition });
  }, 200);

  addRotation () {
    const { viewer } = this.state;
    if (this.rotating) return;
    viewer.clock.onTick.addEventListener(this.onTick);
    this.rotating = true;
  }

  addTick () {
    const { viewer } = this.state;
    if (this.ticking) return;
    viewer.clock.onTick.addEventListener(this.onTick);
    this.ticking = true;
  }

  removeRotation () {
    const { viewer } = this.state;
    viewer.clock.onTick.removeEventListener(this.onTick);
    this.rotating = false;
  }

  removeTicking () {
    const { viewer } = this.state;
    viewer.clock.onTick.removeEventListener(this.onTick);
    this.ticking = false;
  }

  render () {
    const { props, state } = this;
    const { rotate } = props;
    const { layers, viewer, clickedPosition, hoverPosition } = state;
    if (viewer) this[rotate ? 'addRotation' : 'removeRotation']();

    return createElement(CesiumMapComponent, {
      mapId,
      layers,
      viewer,
      clickedPosition,
      hoverPosition,
      ...props
    });
  }
}

export default CesiumComponent;
