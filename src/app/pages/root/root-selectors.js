import { createSelector, createStructuredSelector } from 'reselect';
// import groupBy from 'lodash/groupBy';

const selectDatasets = ({ datasets = {} }) => datasets.data;
const selectQueryParams = ({ location = {} }) => location.query || null;

export const getLayersActives = createSelector(
  [selectQueryParams],
  query => (query.activeLayers ? query.activeLayers.split(',') : [])
);

export const getDatasets = createSelector(
  [selectDatasets, getLayersActives],
  (datasets, activeDatasets) =>
    Object.values(datasets).map(dataset => ({
      ...dataset,
      layers: dataset.layers.map(layer => ({
        ...layer,
        active: activeDatasets.includes(layer.slug)
      }))
    }))
);

export const getRootState = createStructuredSelector({
  query: selectQueryParams,
  datasets: getDatasets
});
