import { groupBy } from 'lodash';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectDatasetsLoading, getDatasets } from 'selectors/datasets-selectors';
import { selectCategoriesLoading, getDatasetsByCategory } from 'selectors/categories-selectors';
import { selectQueryParams } from 'selectors/location-selectors';

export const getCategoriesLoading = createSelector(
  [ selectDatasetsLoading, selectCategoriesLoading ],
  (datasetsLoading, categoriesLoading) => datasetsLoading && categoriesLoading
);

const getLayersActive = createSelector([ selectQueryParams ], query => query && query.activeLayers);

export const getCategoriesGroups = createSelector(
  getDatasetsByCategory,
  categories => Object.values(groupBy(categories, 'groupSlug'))
);

export const getGroupCardsOpen = createSelector([ getCategoriesGroups, getLayersActive, getDatasets ], (
  groups,
  layersActive,
  datasets
) =>
  {
    const datasetsInGroups = groups.map(group => {
      const groupDatasets = [];
      group.forEach(cat => {
        groupDatasets.push(cat.datasets.map(dataset => dataset.slug));
      });
      return { group: group[0].groupSlug, datasets: groupDatasets.reduce((acc, val) => acc.concat(val), []) };
    });
    const openDatasets = datasets &&
      (datasets.filter(
        dat =>
          dat.layers.filter(
            l => layersActive && layersActive.find(active => active.slug === l.slug) !== undefined
          ).length >
            0
      ) ||
        []);
    return datasetsInGroups
      .filter(g => g.datasets.some(d => openDatasets.find(o => o.slug === d)))
      .map(group => group.group);
  });

export const mapStateToProps = createStructuredSelector({
  loading: getCategoriesLoading,
  categoriesGroups: getCategoriesGroups,
  openGroups: getGroupCardsOpen
});
