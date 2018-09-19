import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';
import { selectQueryParams } from 'selectors/location-selectors';

export const getDatasetsFiltered = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.reduce(
    (acc, dataset) => {
      if (!dataset.active) return acc;
      return [ ...acc, ...dataset.layers.filter(layer => layer.active) ];
    },
    []
  );
});

export const getDatasetsFilteredWithoutGrid = createSelector([ getDatasetsFiltered ], datasets => {
  if (!datasets) return undefined;
  return datasets.filter(d => d.type !== 'grid');
});

export const getDatasetFilteredByGrid = createSelector([ getDatasetsFiltered ], datasets => {
  if (!datasets) return undefined;
  return [
    {
      slug: 'terrain',
      query: 'https://half-earth.carto.com/api/v2/sql?q=SELECT cell_id, ST_AsGeoJSON(ST_SimplifyPreserveTopology(the_geom, 0.1)) as the_geom FROM terrestrial_grid'
    }
  ];
});

export const getCoordinates = createSelector([ selectQueryParams ], query => {
  if (!query || !query.coordinates) return undefined;
  return query.coordinates;
});

export const getTerrainMode = createSelector([ selectQueryParams ], query => {
  if (!query || !query.terrain) return undefined;
  return query.terrain == 'true'; // eslint-disable-line eqeqeq
});

export const getCoordinatesOptions = createSelector([ selectQueryParams ], query => {
  if (!query || !query.orientation) return undefined;
  const [ heading, pitch, roll ] = query.orientation;
  return { orientation: { roll, pitch, heading } };
});

export const mapStateToProps = createStructuredSelector({
  layers: getDatasetsFilteredWithoutGrid,
  gridLayers: getDatasetFilteredByGrid,
  terrainMode: getTerrainMode,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions
});
