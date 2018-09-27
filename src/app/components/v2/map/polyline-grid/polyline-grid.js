import { Component } from 'react';
import PropTypes from 'prop-types';

class PolylineGrid extends Component {
  primitive = null;

  componentDidMount() {
    this.addGrid();
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    if (this.primitive && show !== prevProps.show) {
      this.primitive.show = show;
    }
  }

  componentWillUnmount() {
    this.removeGrid();
  }

  async addGrid() {
    const { layer, map, show } = this.props;
    const { layerConfig } = layer;
    let query = '';
    try {
      const { sql } = layerConfig && layerConfig.body.layers && layerConfig.body.layers[0].options;
      query = `https://${layer.layerConfig.account}.carto.com/api/v2/sql?q=${sql}`;
    } catch (e) {
      console.warn(e);
      return;
    }
    const { rows } = await fetch(query).then(d => d.json());
    let geometryInstances;
    if (rows && rows.length) {
      geometryInstances = rows.reduce((acc, row) => {
        let coordinates;
        try {
          coordinates = JSON.parse(row.the_geom).coordinates[0];
        } catch (e) {
          console.warn(e);
          return acc;
        }
        const outlinesCoords = coordinates.reduce((ac, current) => ac.concat(current), []);

        const polyLine = new Cesium.GeometryInstance({
          geometry: new Cesium.PolylineGeometry({
            positions: Cesium.Cartesian3.fromDegreesArray(outlinesCoords),
            width: 2,
            vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT
          }),
          attributes: { color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.WHITE) }
        });

        if (polyLine) {
          acc.push(polyLine);
        }
        return acc;
      }, []);
    }

    if (geometryInstances && geometryInstances.length > 0 && map) {
      this.primitive = new Cesium.Primitive({
        geometryInstances,
        // Needed to style each one on a different way
        appearance: new Cesium.PolylineColorAppearance({ translucent: true }),
        interleave: true,
        vertexCacheOptimize: true,
        compressVertices: true,
        show
      });
      map.scene.primitives.add(this.primitive);
      this.forceUpdate(); // Doing this to notify childrens it is ready
    }
  }

  removeGrid() {
    const { map } = this.props;
    if (map) {
      map.scene.primitives.remove(this.primitive);
    }
  }

  render() {
    return this.props.children ? this.props.children(this.primitive) || null : null;
  }
}

PolylineGrid.propTypes = {
  layer: PropTypes.object,
  map: PropTypes.object,
  children: PropTypes.func,
  show: PropTypes.bool
};

PolylineGrid.defaultProps = { layer: null, map: null, children: null, show: true };

export default PolylineGrid;
