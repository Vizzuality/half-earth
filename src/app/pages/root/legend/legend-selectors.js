import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';
import { getDatasets } from 'selectors/datasets-selectors';
import sortBy from 'lodash/sortBy';

export const getDatasetsFiltered = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.filter(d => d.active);
});

function getDatasetNameByLayer(dataset, layer) {
  if (!dataset) return '';
  switch (dataset.slug) {
    case 'human-pressure':
      return dataset.name;
    case 'grids':
      return layer.name;
    default:
      return `${dataset.name} ${layer.name}`;
  }
}

export const getDatasetLayersParsed = createSelector([ getDatasetsFiltered ], datasets => {
  if (!datasets) return null;
  return sortBy(
    datasets.map(dataset => ({
      ...dataset,
      layers: dataset.layers.map(layer => ({ ...layer, name: getDatasetNameByLayer(dataset, layer) }))
    })),
    'order'
  );
});

export const mapStateToProps = createStructuredSelector({ query: selectQueryParams, datasets: getDatasetLayersParsed });
