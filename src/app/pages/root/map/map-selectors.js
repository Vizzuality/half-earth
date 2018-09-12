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
  layers: getDatasetsFiltered,
  query: selectQueryParams,
  coordinates: getCoordinates,
  coordinatesOptions: getCoordinatesOptions
});
