import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import CesiumMapComponent from './map-component';

const { MAPBOX_TOKEN } = process.env;
const { Cesium } = window;
const mapId = `map-${new Date().getTime()}`;
let gridPrimitive = null;
let lastObj = null;

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

  setGridStatus(status) {
    if (status) {
      this.addGrid();
    } else {
      this.removeGrid();
    }
  }

  async addGrid() {
    // const grid = Cesium.GeoJsonDataSource.load('/geoms/grid.topojson');
    // this.viewer.dataSources.add(grid);
    const data = await fetch(
      'https://half-earth.carto.com/api/v2/sql?q=SELECT cell_id, ST_AsGeoJSON(ST_SimplifyPreserveTopology(the_geom, 1)) as the_geom FROM terrestrial_grid'
    ).then(d => d.json());
    const rectangles = data.rows.map(row => ({
      id: row.cell_id,
      coordinates: JSON.parse(row.the_geom).coordinates[0]
    }));
    const geometryInstances = [];

    for (let i = 0; i < rectangles.length; i++) {
      if (rectangles[i] && rectangles[i].coordinates) {
        // Polyline grid
        // const polygon = new Cesium.GeometryInstance({
        //   geometry : new Cesium.PolylineGeometry({
        //     positions : rectangles[i].coordinates.map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1])),
        //     width : 1,
        //     vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT
        //   }),
        //   id: rectangles[i].id
        // });
        const polygon = new Cesium.GeometryInstance({
          geometry: new Cesium.PolygonGeometry({
            polygonHierarchy: new Cesium.PolygonHierarchy(
              rectangles[i].coordinates.map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]))
            ),
            height: 0
          }),
          id: rectangles[i].id,
          attributes: { color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.WHITE.withAlpha(0.3)) }
        });
        geometryInstances.push(polygon);
      }
    }
    // Polyline grid
    // gridPrimitive = new Cesium.Primitive({
    //   geometryInstances,
    //   appearance : new Cesium.PolylineMaterialAppearance({
    //     material : Cesium.Material.fromType('PolylineOutline', {
    //       color : Cesium.Color.BLACK,
    //       outlineWidth : 2,
    //       outlineColor : Cesium.Color.WHITE.withAlpha(0.5)
    //     })
    //   })
    // });
    gridPrimitive = new Cesium.Primitive({
      geometryInstances,
      // Needed to style each one on a different way
      appearance: new Cesium.PerInstanceColorAppearance()
    });
    this.viewer.scene.primitives.add(gridPrimitive);
  }

  removeGrid() {
    this.viewer.scene.primitives.remove(gridPrimitive);
  }

  onMouseMove = movement => {
    const pickedObject = this.viewer.scene.pick(movement.endPosition);
    if (Cesium.defined(pickedObject)) {
      if (gridPrimitive && (!lastObj || lastObj.id !== pickedObject.id)) {
        const attributes = gridPrimitive.getGeometryInstanceAttributes(pickedObject.id);
        if (attributes) {
          attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.WHITE.withAlpha(0.8));
        }
        if (lastObj) {
          const lastAttributes = gridPrimitive.getGeometryInstanceAttributes(lastObj.id);
          if (lastAttributes) {
            lastAttributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.WHITE.withAlpha(0.3));
          }
        }
        lastObj = pickedObject;
      }
    }
  };

  onMouseClick = e => {
    const pickedObject = this.viewer.scene.pick(e.position);
    if (Cesium.defined(pickedObject)) {
      if (gridPrimitive) {
        const attributes = gridPrimitive.getGeometryInstanceAttributes(pickedObject.id);
        this.props.onMouseClick(e, { pickedObject, attributes });
      }
    } else {
      console.info('Clicked with no results');
    }
  };

  componentDidMount() {
    const { coordinates, camera, grid } = this.props;
    this.viewer = new Cesium.Viewer(mapId, CesiumComponent.mapConfig);
    this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    this.handler.setInputAction(this.onMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    this.handler.setInputAction(this.onMouseClick, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    if (grid) {
      this.addGrid();
    }

    if (coordinates) this.setCoordinates();
    if (camera) this.setCamera();

    if (this.props.onMoveEnd) {
      this.viewer.camera.moveEnd.addEventListener(this.handleMoveEnd);
    }
  }

  componentDidUpdate(prevProps) {
    const { onTick, grid, lockNavigation = false, rotate, coordinates, coordinatesOptions, camera } = this.props;
    if (this.viewer) {
      if (!this.rotating && rotate) this.addRotation();
      if (this.rotating && !rotate) this.removeRotation();
      if (onTick && !this.ticking) this.addTick();
      if (camera && prevProps.camera !== camera) this.setCamera();
      if (lockNavigation) disablePanning(this.viewer);
      if (
        coordinates && (prevProps.coordinates !== coordinates || prevProps.coordinatesOptions !== coordinatesOptions)
      ) {
        this.setCoordinates();
      }
      if (grid !== prevProps.grid) {
        this.setGridStatus(grid);
      }
    }
  }

  componentWillUnmount() {
    this.removeTicking();
    this.removeRotation();
  }

  onTick = clock => {
    if (this.rotating) this.rotate(clock);
    const cameraPosition = this.viewer.scene.camera.positionWC;
    const ellipsoidPosition = this.viewer.scene.globe.ellipsoid.scaleToGeodeticSurface(cameraPosition);
    const distance = Cesium.Cartesian3.magnitude(
      Cesium.Cartesian3.subtract(cameraPosition, ellipsoidPosition, new Cesium.Cartesian3())
    );
    if (distance !== this.distance) {
      this.props.onTick({ distance });
      this.distance = distance;
    }
  };

  setCoordinates() {
    const { coordinates, coordinatesOptions } = this.props;
    this.flyTo(...coordinates, coordinatesOptions);
  }

  setCamera() {
    const { camera } = this.props;
    Object.assign(this.viewer.camera, camera);
  }

  handleMoveEnd = () => {
    const { coordinates = [], coordinatesOptions = {} } = this.props;
    const { orientation = {} } = coordinatesOptions;
    const { x, y, z } = this.viewer.camera.position;
    const { heading, pitch, roll } = this.viewer.camera;
    const isDifferentCoordinates = coordinates[0] !== x || coordinates[1] !== y || coordinates[2] !== z;
    const isDifferentOrientation = orientation.heading !== heading ||
      orientation.pitch !== pitch ||
      orientation.roll !== roll;

    if (isDifferentCoordinates || isDifferentOrientation) {
      this.props.onMoveEnd({ coordinates: [ x, y, z ], orientation: [ heading, pitch, roll ] });
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

  flyTo(lat, long, z = 15000.0, rest = {}) {
    this.viewer.camera.flyTo({ destination: { x: lat, y: long, z }, ...rest });
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
  grid: PropTypes.bool,
  onTick: PropTypes.func,
  onMoveEnd: PropTypes.func,
  onMouseClick: PropTypes.func,
  lockNavigation: PropTypes.bool,
  rotate: PropTypes.func,
  coordinates: PropTypes.array,
  coordinatesOptions: PropTypes.object,
  camera: PropTypes.object
};

CesiumComponent.defaultProps = { grid: true };

export default CesiumComponent;
