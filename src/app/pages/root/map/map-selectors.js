import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';
import { selectQueryParams } from 'selectors/location-selectors';

export const getLayersFiltered = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.reduce(
    (acc, dataset) => {
      if (!dataset.active) return acc;
      return [
        ...acc,
        ...dataset.layers
          .filter(layer => layer.active)
          .map(layer => ({ ...layer, slug: dataset.slug }))
      ];
    },
    []
  );
});

export const getTerrainMode = createSelector([ selectQueryParams ], query => {
  if (!query) return undefined;
  return typeof query.terrain === 'string' ? query.terrain === 'true' : query.terrain;
});

export const getLayersFilteredWithoutGrid = createSelector([ getLayersFiltered ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset !== 'grids');
});

export const getDatasetFilteredByGrid = createSelector([ getLayersFiltered ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset === 'grids');
});

export const getCoordinates = createSelector([ selectQueryParams ], query => {
  if (!query || !query.coordinates) return undefined;
  return query.coordinates;
});

export const getCoordinatesOptions = createSelector([ selectQueryParams ], query => {
  if (!query || !query.orientation) return undefined;
  const [ heading, pitch, roll ] = query.orientation;
  return { orientation: { roll, pitch, heading } };
});

export const mapStateToProps = createStructuredSelector({
  layers: getLayersFilteredWithoutGrid,
  gridLayers: getDatasetFilteredByGrid,
  terrainMode: getTerrainMode,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions
});
