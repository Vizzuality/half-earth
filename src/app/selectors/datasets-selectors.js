import { createSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';

export const selectDatasets = ({ datasets = {} }) => datasets.data;
export const selectDatasetsLoading = ({ datasets = {} }) => datasets.loading;

export const getLayersActive = createSelector([selectQueryParams], query => query && query.activeLayers);

export const getDatasets = createSelector([selectDatasets, getLayersActive], (datasets, activeLayers = []) => {
  if (!datasets) return;
  return Object.values(datasets).map(dataset => {
    const layers = dataset.layers.map(layer => {
      const layerActive = activeLayers.find(l => l.slug === layer.slug);
      return layerActive
        ? { ...layer, ...layerActive, active: true } // eslint-disable-line eqeqeq
        : layer;
    });
    return {
      ...dataset,
      active: layers.some(l => l.active),
      visibility: layers.every(l => l.visibility),
      layers
    };
  });
});
