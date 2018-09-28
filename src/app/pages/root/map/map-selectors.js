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

export const getLatLng = createSelector([ selectQueryParams ], query => {
  if (!query || !query.lat || !query.lng) return undefined;
  return { lat: query.lat, lng: query.lng };
});

export const mapStateToProps = createStructuredSelector({
  layers: getLayersFiltered,
  gridLayers: getGridLayers,
  terrainMode: getIsTerrain,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions,
  latLng: getLatLng,
  terrainCameraOffset: getTerrainCameraOffset
});
