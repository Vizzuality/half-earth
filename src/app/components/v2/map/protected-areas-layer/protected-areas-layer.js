import { Component } from 'react';
import PropTypes from 'prop-types';

function createPolygon({ name, type, park, coords }) {
  return new Cesium.GeometryInstance({
    geometry: new Cesium.PolygonGeometry({ polygonHierarchy: new Cesium.PolygonHierarchy(coords) }),
    id: { type, name, park },
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        // If alpha is 0 it does not trigger the mouse event
        Cesium.Color.WHITE.withAlpha(0.01)
      )
    }
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

class ProtectedAreasLayer extends Component {
  componentDidMount() {
    const { conservationAreasActive } = this.props;
    this.renderAreas(conservationAreasActive);
  }

  componentDidUpdate() {
    const { conservationAreasActive } = this.props;
    this.renderAreas(conservationAreasActive);
  }

  componentWillUnmount() {
    this.removePolygon(this.primitive);
  }

  addGridPolygons(rows) {
    const { map } = this.props;
    const getCoordinates = row => JSON.parse(row.the_geom).coordinates[0];

    const reserves = rows.map(row => ({
      name: row.name,
      park: row.desig_eng,
      type: 'protected-area',
      coords: getCoordinates(row)[0].map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]))
    }));
    const reservesPolygons = reserves.map(r => createPolygon(r));
    if (reservesPolygons) {
      this.primitive = createPolygonPrimitive(reservesPolygons);
      map.scene.primitives.add(this.primitive);
    }
  }

  async renderAreas(conservationAreasActive) {
    const { gridCellCoordinates, layers } = this.props;
    const areasToFetch = conservationAreasActive.map(ca => ca.slug);
    const layersConfig = layers.reduce(
      (acc, l) => {
        let areaConfig;
        areasToFetch.forEach(area => {
          if (l.id.includes(area)) {
            areaConfig = { [area]: l.layerConfig };
          }
        });
        return { ...acc, ...areaConfig };
      },
      {}
    );
    const radiansCoords = gridCellCoordinates.map(c => Cesium.Cartographic.fromCartesian(c));
    const degreesCoords = radiansCoords.map(c => [
      Cesium.Math.toDegrees(c.longitude),
      Cesium.Math.toDegrees(c.latitude)
    ]);
    const queries = [];
    try {
      const params = {
        bounds: JSON.stringify({ type: 'Polygon', coordinates: [ degreesCoords ] })
      };
      areasToFetch.forEach((a, i) => {
        let paramsConfig;
        try {
          paramsConfig = JSON.parse(layersConfig[a].params_config);
        } catch (error) {
          console.warn(error);
        }
        const replacePercentage = /%/g;
        const sql = layersConfig[a].body.layers[0].options.sql
          .replace(`{{${paramsConfig[0].key}}}`, params[paramsConfig[0].key])
          .replace(replacePercentage, '%25');
        queries[i] = `https://${layersConfig[a].account}.carto.com/api/v2/sql?q=${sql}`;
      });
    } catch (error) {
      console.warn(error);
    }
    const reservesByCategory = [];
    async function getReserves() {
      try {
        await Promise.all(
          queries.map(async q => {
            const { rows } = await fetch(q).then(d => d.json());
            if (rows) {
              reservesByCategory.push(rows);
            }
          })
        );
      } catch (e) {
        console.warn(e);
      }
    }

    await getReserves();

    if (reservesByCategory && reservesByCategory.length) {
      reservesByCategory.forEach(group => {
        this.addGridPolygons(group);
      });
    }
  }

  removePolygon(primitive) {
    const { map } = this.props;
    if (map) {
      map.scene.primitives.remove(primitive);
    }
  }

  render() {
    return null;
  }
}

ProtectedAreasLayer.propTypes = {
  map: PropTypes.object,
  conservationAreasActive: PropTypes.array.isRequired,
  gridCellCoordinates: PropTypes.array.isRequired
};

ProtectedAreasLayer.defaultProps = { map: null };

export default ProtectedAreasLayer;
