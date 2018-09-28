import { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

class GridLayer extends Component {
  primitive = null;

  bounds = null;

  componentDidMount() {
    if (this.props.show) {
      this.renderGrid();
    }
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    if (this.primitive && show !== prevProps.show) {
      this.primitive.show = show;
    }
    if (show) {
      this.renderGrid();
    }
  }

  componentWillUnmount() {
    this.removeGrid();
  }

  async renderGrid() {
    const { layer, map } = this.props;
    const { layerConfig = {} } = layer;
    let query = '';
    const bounds = map.camera.computeViewRectangle();
    if (!this.bounds || !isEqual(bounds, this.bounds)) {
      // console.log(bounds, this.bounds);
      this.bounds = bounds;
      // Cesium.Math.toDegrees(bounds.west)
      try {
        const params = {
          bounds: '{ "type": "Polygon", "coordinates": [ [ [ -9.77783203125, 36.474306755095235 ], [ 1.0986328125, 36.474306755095235 ], [ 1.0986328125, 44.166444664458595 ], [ -9.77783203125, 44.166444664458595 ], [ -9.77783203125, 36.474306755095235 ] ] ] } } '
        };
        let { sql } = layerConfig && layerConfig.body.layers && layerConfig.body.layers[0].options;

        let paramsConfig;
        try {
          paramsConfig = layerConfig.params_config && JSON.parse(layerConfig.params_config);
        } catch (e) {
          console.warn(e);
        }
        if (paramsConfig) {
          paramsConfig.forEach(config => {
            if (params[config.key]) {
              sql = sql.replace(`{{${config.key}}}`, params[config.key]);
            }
          });
        }
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
          const polygonCoords = coordinates.map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]));

          const polygon = new Cesium.GeometryInstance({
            geometry: new Cesium.PolygonGeometry({
              polygonHierarchy: new Cesium.PolygonHierarchy(polygonCoords),
              height: 0,
              vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT
            }),
            id: { grid: true, slug: layer.id, cellId: row.cell_id },
            attributes: {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(
                Cesium.Color.WHITE.withAlpha(0.1)
              )
            }
          });

          if (polygon) {
            acc.push(polygon);
          }

          return acc;
        }, []);
      }

      if (geometryInstances && geometryInstances.length > 0 && map) {
        this.removeGrid();
        this.primitive = new Cesium.Primitive({
          geometryInstances,
          // Needed to style each one on a different way
          appearance: new Cesium.PolylineColorAppearance({ translucent: true }),
          interleave: true,
          vertexCacheOptimize: true,
          compressVertices: true,
          show: true
        });
        map.scene.primitives.add(this.primitive);
        this.forceUpdate(); // Doing this to notify childrens it is ready
      }
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
