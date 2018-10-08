import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';
import { selectQueryParams, getIsTerrain } from 'selectors/location-selectors';

export const getLayers = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.reduce(
    (acc, dataset) => [
      ...acc,
      ...dataset.layers.map(layer => ({ ...layer, slug: dataset.slug }))
    ],
    []
  );
});

export const getLayersFiltered = createSelector([ getLayers ], datasets => {
  if (!datasets) return null;
  return datasets.filter(layer => layer.active);
});

export const getGridLayers = createSelector([ getLayers ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset === 'grids');
});

export const getProtectedAreasLayer = createSelector([ getLayersFiltered ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset.includes('protected'));
});

export const getActiveTooltip = createSelector(selectQueryParams, query => {
  if (!query || !query.activeTooltip) return undefined;
  return query.activeTooltip;
});

export const getCoordinates = createSelector([ selectQueryParams ], query => {
  if (!query || !query.coordinates) return undefined;
  return query.coordinates;
});

export const getTerrainCameraOffset = createSelector([ selectQueryParams ], query => {
  if (!query || !query.terrainCameraOffset) return undefined;
  return { offset: query.terrainCameraOffset };
});

export const getCoordinatesOptions = createSelector([ selectQueryParams ], query => {
  if (!query || !query.orientation) return undefined;
  const [ heading, pitch, roll ] = query.orientation;
  return { orientation: { roll, pitch, heading } };
});

export const getGridOutlineCoords = createSelector([ selectQueryParams ], query => {
  if (!query || !query.cellCoordinates) return undefined;
  return query.cellCoordinates;
});

export const mapStateToProps = createStructuredSelector({
  layers: getLayersFiltered,
  gridLayers: getGridLayers,
  protectedAreasLayer: getProtectedAreasLayer,
  terrainMode: getIsTerrain,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions,
  terrainCameraOffset: getTerrainCameraOffset,
  cellCoordinates: getGridOutlineCoords,
  activeTooltip: getActiveTooltip
});
