import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';
import { getDatasets } from 'selectors/datasets-selectors';
import sortBy from 'lodash/sortBy';

export const getDatasetsFiltered = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.filter(d => d.active);
});

export const getDatasetLayersParsed = createSelector([ getDatasetsFiltered ], datasets => {
  if (!datasets) return null;
  return sortBy(
    datasets.map(dataset => ({
      ...dataset,
      layers: dataset.layers.map(layer => ({ ...layer, name: layer.legendConfig.title || layer.name }))
    })),
    'order'
  );
});

export const mapStateToProps = createStructuredSelector({ query: selectQueryParams, datasets: getDatasetLayersParsed });
