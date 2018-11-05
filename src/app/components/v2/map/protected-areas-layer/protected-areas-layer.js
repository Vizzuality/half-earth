import { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual, differenceBy } from 'lodash';

function createPolygon({ name, type, subtype, park, coords }) {
  return new Cesium.GeometryInstance({
    geometry: new Cesium.PolygonGeometry({ polygonHierarchy: { positions: coords } }),
    // geometry: new Cesium.PolygonGeometry({ polygonHierarchy: new Cesium.PolygonHierarchy(coords) }),
    id: { type, name, park, subtype },
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(
        // If alpha is 0 it does not trigger the mouse event
        Cesium.Color.WHITE.withAlpha(0.01)
      )
    }
  });
}

function createPolygonPrimitive(geometryInstances) {
  return new Cesium.GroundPrimitive({
    geometryInstances,
    // Needed to style each one on a different way
    appearance: new Cesium.PerInstanceColorAppearance({ flat: true }),
    interleave: true,
    vertexCacheOptimize: true,
    compressVertices: true,
    releaseGeometryInstances: false
  });
}

class ProtectedAreasLayer extends Component {
  protectedAreasPolygonsReferences = [];

  componentDidMount() {
    const { conservationAreasActive, show } = this.props;

    if (show) {
      this.renderAreas(conservationAreasActive);
    }
  }

  componentDidUpdate(prevProps) {
    const { conservationAreasActive, show } = this.props;
    if (!show) {
      this.removeAll();
    }
    if (!prevProps.show && show) {
      if (conservationAreasActive.length > 0) this.renderAreas(conservationAreasActive);
    }
    if (prevProps.show && show) {
      if (!isEqual(prevProps.conservationAreasActive, conservationAreasActive)) {
        let newAreasToRender = [];
        let areasToRemove = [];

        if (prevProps.conservationAreasActive.length > conservationAreasActive.length) {
          areasToRemove = differenceBy(
            prevProps.conservationAreasActive,
            conservationAreasActive,
            'dataset'
          );
        } else if (prevProps.conservationAreasActive.length < conservationAreasActive.length) {
          newAreasToRender = conservationAreasActive.reduce(
            (acc, ca) =>
              prevProps.conservationAreasActive.some(pca => isEqual(pca, ca))
                ? acc
                : [ ...acc, ca ],
            []
          );
        }
        if (newAreasToRender.length > 0) this.renderAreas(newAreasToRender);
        if (areasToRemove.length > 0)
          areasToRemove.forEach(area => this.removePolygon(area.dataset));
      }
    }
  }

  addPolygons(rows) {
    const { map } = this.props;
    const getCoordinates = row => JSON.parse(row.the_geom).coordinates[0];

    const reserves = rows.map(row => ({
      name: row.name,
      park: row.desig_eng,
      type: 'protected-area',
      subtype: row.areaSubtype,
      coords: getCoordinates(row)[0].map(c => Cesium.Cartesian3.fromDegrees(c[0], c[1]))
    }));
    const reservesPolygons = reserves.map(r => createPolygon(r));

    if (reservesPolygons.length > 0) {
      const primitive = createPolygonPrimitive(reservesPolygons);
      this.protectedAreasPolygonsReferences.push(primitive);
      map.scene.primitives.add(primitive);
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
      areasToFetch.forEach(a => {
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
        queries.push({
          areaSubtype: a,
          query: `https://${layersConfig[a].account}.carto.com/api/v2/sql?q=${sql}`
        });
      });
    } catch (error) {
      console.warn(error);
    }
    const reservesByCategory = [];
    async function getReserves() {
      try {
        await Promise.all(
          queries.map(async q => {
            const { rows } = await fetch(q.query).then(d => d.json());
            if (rows) {
              const rowsWithSubtype = rows.map(row => ({ ...row, areaSubtype: q.areaSubtype }));
              reservesByCategory.push(rowsWithSubtype);
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
        this.addPolygons(group);
      });
    }
  }

  removePolygon(area) {
    const { map } = this.props;
    if (map) {
      const primitiveToRemove = this.protectedAreasPolygonsReferences.filter(
        primitive => primitive.geometryInstances[0].id.subtype === area
      );
      // remove the last primitive from this type
      map.scene.primitives.remove(primitiveToRemove[primitiveToRemove.length - 1]);
    }
  }

  removeAll() {
    const { map } = this.props;
    const hasAreas = this.protectedAreasPolygonsReferences.length > 0;
    if (map && hasAreas) {
      this.protectedAreasPolygonsReferences.forEach(p => {
        map.scene.primitives.remove(p);
      });
      this.protectedAreasPolygonsReferences = [];
    }
  }

  render() {
    return null;
  }
}

ProtectedAreasLayer.propTypes = {
  map: PropTypes.object,
  conservationAreasActive: PropTypes.array.isRequired,
  gridCellCoordinates: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired
};

ProtectedAreasLayer.defaultProps = { map: null };

export default ProtectedAreasLayer;
