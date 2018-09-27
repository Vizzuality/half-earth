import { Component } from 'react';
import PropTypes from 'prop-types';

class GridLayer extends Component {
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
          coordinates = JSON.parse(row.the_geom).coordinates[0].map(
            c => Cesium.Cartesian3.fromDegrees(c[0], c[1])
          );
        } catch (e) {
          console.warn(e);
          return acc;
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
        const polygon = new Cesium.GeometryInstance({
          geometry: new Cesium.PolygonGeometry({
            polygonHierarchy: new Cesium.PolygonHierarchy(coordinates),
            height: 0
          }),
          id: { grid: true, slug: layer.id, cellId: row.cell_id },
          attributes: {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(
              Cesium.Color.WHITE.withAlpha(0.3)
            )
          }
        });
        if (polygon) {
          acc.push(polygon);
        }
        return acc;
      }, []);
    }
    // Polyline grid
    // this.primitive = new Cesium.Primitive({
    //   geometryInstances,
    //   appearance : new Cesium.PolylineMaterialAppearance({
    //     material : Cesium.Material.fromType('PolylineOutline', {
    //       color : Cesium.Color.BLACK,
    //       outlineWidth : 2,
    //       outlineColor : Cesium.Color.WHITE.withAlpha(0.5)
    //     })
    //   })
    // });
    if (geometryInstances && geometryInstances.length > 0 && map) {
      this.primitive = new Cesium.Primitive({
        geometryInstances,
        // Needed to style each one on a different way
        appearance: new Cesium.PerInstanceColorAppearance({ flat: true }),
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

GridLayer.propTypes = {
  layer: PropTypes.object,
  map: PropTypes.object,
  children: PropTypes.func,
  show: PropTypes.bool
};

GridLayer.defaultProps = { layer: null, map: null, children: null, show: true };

export default GridLayer;
