import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';

export const getDatasetsFiltered = createSelector([getDatasets], datasets => {
  if (!datasets) return;
  return datasets.filter(d => d.active);
});

export const getMapState = createStructuredSelector({
  layers: getDatasetsFiltered
});
