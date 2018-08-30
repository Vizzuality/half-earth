import { createSelector, createStructuredSelector } from 'reselect';
// import groupBy from 'lodash/groupBy';

const selectDatasets = ({ datasets = {} }) => datasets.data;
const selectQueryParams = ({ location = {} }) => location.query || null;

export const getDatasetActives = createSelector(
  [selectQueryParams],
  query => (query.activeLayers ? query.activeLayers.split(',') : [])
);

export const getDatasets = createSelector(
  [selectDatasets, getDatasetActives],
  (datasets, activeDatasets) => {
    if (!datasets) return;

    return Object.values(datasets).map(dataset => ({
      ...dataset,
      layers: dataset.layers.map(layer => ({
        ...layer,
        active: activeDatasets.includes(layer.slug)
      }))
    }));
  }
);

export const getRootState = createStructuredSelector({
  query: selectQueryParams,
  datasets: getDatasets
});
