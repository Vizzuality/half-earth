import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';
import { getDatasets } from 'selectors/datasets-selectors';

export const getDatasetsFiltered = createSelector([getDatasets], datasets => {
  if (!datasets) return;
  return datasets.filter(d => d.active);
});

export const getDatasetLayersParsed = createSelector([getDatasetsFiltered], datasets => {
  if (!datasets) return;
  return datasets.map(dataset => ({
    ...dataset,
    layers: dataset.layers.map(layer => ({
      ...layer,
      name: `${dataset.name} ${layer.name}`
    }))
  }));
});

export const mapStateToProps = createStructuredSelector({
  query: selectQueryParams,
  datasets: getDatasetLayersParsed
});