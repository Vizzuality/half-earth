import { createSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';

export const selectDatasets = ({ datasets = {} }) => datasets.data;
export const selectDatasetsLoading = ({ datasets = {} }) => datasets.loading;

export const getLayersActive = createSelector(
  [ selectQueryParams ],
  query => query && query.activeLayers
);

export const getDatasets = createSelector([ selectDatasets, getLayersActive ], (
  datasets,
  activeLayers = []
) =>
  {
    if (!datasets) return null;
    return Object.values(datasets).map(dataset => {
      let order = 0;
      const layers = dataset.layers
        .sort((a, b) => {
          const isRarityOrRichness = a.name.toUpperCase() === 'RARITY' ||
            b.name.toUpperCase === 'RICHNESS';
          if (!isRarityOrRichness) return 0;
          return b.name.length - a.name.length;
        })
        .map(layer => {
          const layerActive = activeLayers && activeLayers.find(l => l.slug === layer.slug);
          if (!layerActive) return { ...layer, category: dataset.category };

          order = activeLayers.findIndex(l => l.slug === layer.slug);
          return {
            ...layer,
            ...layerActive,
            category: dataset.category,
            active: true,
            zIndex: order + 1
          };
        });
      return {
        ...dataset,
        active: layers.some(l => l.active),
        visibility: layers.every(l => l.visibility),
        order,
        layers
      };
    });
  });

export const getHEDatasets = createSelector(getDatasets, datasets => {
  if (!datasets) return null;
  const halfEarthDatasets = datasets.filter(dataset => dataset.category === 'he-movement');
  return halfEarthDatasets;
});
