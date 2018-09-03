import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';

export const getDatasetsFiltered = createSelector([getDatasets], datasets =>
  datasets.filter(d => d.active)
);

export const getLegendState = createStructuredSelector({
  layers: getDatasetsFiltered
});
