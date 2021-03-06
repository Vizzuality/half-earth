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
  return layers.filter(d => d.dataset === 'grids' && !d.id.includes('protected'));
});

export const getProtectedAreasLayers = createSelector([ getLayers ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset === 'grids' && d.id.includes('protected'));
});

export const getProtectedAreasActive = createSelector([ getLayersFiltered ], layers => {
  if (!layers) return undefined;
  return layers.filter(d => d.dataset.includes('protected'));
});

export const getActiveMarker = createSelector(selectQueryParams, query => {
  if (!query || !query.activeMarker) return undefined;
  return query.activeMarker;
});

export const getReservesTooltip = createSelector(selectQueryParams, query => {
  if (!query || !query.reservesTooltip) return undefined;
  const hasTooltip = query.reservesTooltip === 'true' || query.reservesTooltip === true;
  return hasTooltip;
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

export const getGridCellId = createSelector([ selectQueryParams ], query => {
  if (!query || !query.cellId) return undefined;
  return query.cellId;
});

export const mapStateToProps = createStructuredSelector({
  layers: getLayersFiltered,
  gridLayers: getGridLayers,
  protectedAreasAcive: getProtectedAreasActive,
  protectedAreasLayers: getProtectedAreasLayers,
  terrainMode: getIsTerrain,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions,
  terrainCameraOffset: getTerrainCameraOffset,
  cellCoordinates: getGridOutlineCoords,
  activeMarker: getActiveMarker,
  reservesTooltip: getReservesTooltip,
  activeGridCellId: getGridCellId
});
