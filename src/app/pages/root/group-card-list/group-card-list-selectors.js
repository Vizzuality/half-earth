import { groupBy } from 'lodash';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectDatasetsLoading } from 'selectors/datasets-selectors';
import { selectCategoriesLoading, getDatasetsByCategory } from 'selectors/categories-selectors';
import { selectQueryParams } from 'selectors/location-selectors';
import sortBy from 'lodash/sortBy';

export const getCategoriesLoading = createSelector(
  [ selectDatasetsLoading, selectCategoriesLoading ],
  (datasetsLoading, categoriesLoading) => datasetsLoading && categoriesLoading
);

const getLayersActive = createSelector([ selectQueryParams ], query => query && query.activeLayers);

export const getCategoriesActive = createSelector([ getDatasetsByCategory, getLayersActive ], (
  categories,
  layersActive
) =>
  {
    if (!categories) return null;
    if (!layersActive) return categories;
    const layerActiveSlugs = layersActive.map(layer => layer.slug);
    const categoriesActive = categories.map(category => ({
      ...category,
      datasets: sortBy(
        category.datasets.map(dataset => {
          const layers = dataset.layers.map(layer => ({
            ...layer,
            active: layerActiveSlugs.includes(layer.slug)
          }));
          const active = layers.some(l => l.active);
          return { ...dataset, active, layers };
        }),
        'position'
      )
    }));
    return categoriesActive;
  });

export const getCategoriesGroups = createSelector(getCategoriesActive, categories => {
  if (!categories) return null;
  const groupedCategories = groupBy(categories, 'groupSlug');
  return Object
    .keys(groupedCategories)
    .map(key => ({
      slug: key,
      title: groupedCategories[key][0].groupName,
      categories: groupedCategories[key]
    }));
});

export const getGroupCards = createSelector([ getCategoriesGroups ], groups => {
  if (!groups) return null;
  const groupsOpen = groups
    .filter(g => g.slug !== 'half-earth-view')
    .map(group => {
      const layersActive = group.categories.reduce(
        (acc, category) => {
          const datasetsActive = category.datasets.filter(d => d.active);
          return datasetsActive ? acc + datasetsActive.length : acc;
        },
        0
      );
      return { ...group, isOpen: layersActive > 0, layersActive };
    });
  return groupsOpen;
});

export const mapStateToProps = createStructuredSelector({
  loading: getCategoriesLoading,
  categoriesGroups: getGroupCards
});
