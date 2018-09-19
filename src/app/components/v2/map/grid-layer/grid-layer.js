import { Component } from 'react';
import PropTypes from 'prop-types';

class GridLayer extends Component {
  static primitive = null;

  constructor(props) {
    super(props);
    this.state = { ready: false };
  }

  componentDidMount() {
    const { layer, map } = this.props;
    if (layer && layer.query && map) {
      this.addGrid();
    }
  }

  componentWillUnmount() {
    this.removeGrid();
  }

  async addGrid() {
    const { layer, map } = this.props;
    const { rows } = await fetch(layer.query).then(d => d.json());
    let geometryInstances;
    if (rows && rows.length) {
      geometryInstances = rows.map(row => {
        let coordinates;
        try {
          coordinates = JSON.parse(row.the_geom).coordinates[0].map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]));
        } catch (e) {
          console.warn(e);
        }
        // Polyline grid
        // const polygon = new Cesium.GeometryInstance({
        //   geometry : new Cesium.PolylineGeometry({
        //     positions : rectangles[i].coordinates.map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1])),
        //     width : 1,
        //     vertexFormat : Cesium.PolylineMaterialAppearance.VERTEX_FORMAT
        //   }),
        //   id: rectangles[i].id
        // });
        return coordinates
          ? new Cesium.GeometryInstance({
            geometry: new Cesium.PolygonGeometry({
              polygonHierarchy: new Cesium.PolygonHierarchy(coordinates),
              height: 0
            }),
            id: { grid: true, slug: layer.slug, cellId: row.cell_id },
            attributes: { color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.WHITE.withAlpha(0.3)) }
          })
          : null;
      });
    }
    // Polyline grid
    // GridLayer.primitive = new Cesium.Primitive({
    //   geometryInstances,
    //   appearance : new Cesium.PolylineMaterialAppearance({
    //     material : Cesium.Material.fromType('PolylineOutline', {
    //       color : Cesium.Color.BLACK,
    //       outlineWidth : 2,
    //       outlineColor : Cesium.Color.WHITE.withAlpha(0.5)
    //     })
    //   })
    // });
    if (geometryInstances && map) {
      GridLayer.primitive = new Cesium.Primitive({
        geometryInstances,
        // Needed to style each one on a different way
        appearance: new Cesium.PerInstanceColorAppearance(),
        interleave: true,
        vertexCacheOptimize: true,
        compressVertices: true
      });
      map.scene.primitives.add(GridLayer.primitive);
      this.setState({ ready: true });
    }
  }

  removeGrid() {
    const { map } = this.props;
    if (map) {
      map.scene.primitives.remove(GridLayer.primitive);
    }
  }

  render() {
    return this.state.ready && this.props.children ? this.props.children(GridLayer.primitive) || null : null;
  }
}

GridLayer.propTypes = {
  layer: PropTypes.shape({ slug: PropTypes.string, query: PropTypes.string }),
  map: PropTypes.object,
  children: PropTypes.func.isRequired
};

GridLayer.defaultProps = { layer: null, map: null };

export default GridLayer;
