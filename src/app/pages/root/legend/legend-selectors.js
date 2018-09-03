import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';
import { getDatasets } from 'selectors/datasets-selectors';

export const getDatasetsFiltered = createSelector([getDatasets], datasets => {
  if (!datasets) return;
  return datasets.filter(d => d.active);
});

export const getLegendState = createStructuredSelector({
  query: selectQueryParams,
  layers: getDatasetsFiltered
});
