import { Component } from 'react';
import PropTypes from 'prop-types';

function createPolygon(coords, layer, map) {
  // return new Cesium.GeometryInstance({
  //   geometry: new Cesium.PolygonGeometry({
  //     polygonHierarchy: new Cesium.PolygonHierarchy(coords)
  //   }),
  //   id: { type: 'protected-area', slug: 'protercted', coordinates: coords, color: layer.legendConfig.items[0].color },
  //   attributes: {
  //     color: Cesium.ColorGeometryInstanceAttribute.fromColor(
  //       // If alpha is 0 it does not trigger the mouse event
  //       Cesium.Color.WHITE.withAlpha(0.01)
  //     )
  //   }
  // });
  map.entities.add({
    polygon: { hierarchy: { positions: coords, material: Cesium.Color.BLUE.withAlpha(0.5) } }
  });
}

function createPolygonPrimitive(geometryInstances) {
  return new Cesium.Primitive({
    geometryInstances,
    // Needed to style each one on a different way
    appearance: new Cesium.PerInstanceColorAppearance({ flat: true }),
    interleave: true,
    vertexCacheOptimize: true,
    compressVertices: true
  });
}
const polygonCoordinates = [
  [
    [ -8.932056427001953, 42.25558600754745 ],
    [ -8.9154052734375, 42.17116465902176 ],
    [ -8.87197494506836, 42.18859215815507 ],
    [ -8.892745971679688, 42.249232907097614 ],
    [ -8.932056427001953, 42.25558600754745 ]
  ]
];

class ProtectedAreasLayer extends Component {
  componentDidMount() {
    this.renderAreas();
  }

  addGridPolygons() {
    const { map, layer } = this.props;
    const polygonCoords = polygonCoordinates[0].map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]));

    const polygon = createPolygon(polygonCoords, layer, map);
    if (polygon) {
      this.primitive = createPolygonPrimitive(polygon);
      map.scene.primitives.add(this.primitive);
    }
  }

  renderAreas() {
    this.addGridPolygons();
  }

  render() {
    return null;
  }
}

ProtectedAreasLayer.propTypes = { map: PropTypes.object, layer: PropTypes.object.isRequired };

ProtectedAreasLayer.defaultProps = { map: null };

export default ProtectedAreasLayer;
