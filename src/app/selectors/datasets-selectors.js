import { createSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';

export const selectDatasets = ({ datasets = {} }) => datasets.data;
export const selectDatasetsLoading = ({ datasets = {} }) => datasets.loading;

export const getDatasetActives = createSelector(
  [selectQueryParams],
  (query = {}) => (query.activeLayers ? query.activeLayers.split(',') : [])
);

export const getDatasets = createSelector(
  [selectDatasets, getDatasetActives],
  (datasets, activeDatasets) => {
    if (!datasets) return;

    return Object.values(datasets).map(dataset => {
      const layers = dataset.layers.map(layer => ({
        ...layer,
        active: activeDatasets.includes(layer.slug)
      }));
      return {
        ...dataset,
        active: layers.some(l => l.active),
        layers
      };
    });
  }
);
