import { createSelector, createStructuredSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';

export const getDatasetsFiltered = createSelector([ getDatasets ], datasets => {
  if (!datasets) return null;
  return datasets.reduce(
    (acc, dataset) => {
      if (!dataset.active) return acc;
      return [ ...acc, ...dataset.layers.filter(layer => layer.active) ];
    },
    []
  );
});

export const mapStateToProps = createStructuredSelector({ layers: getDatasetsFiltered });
