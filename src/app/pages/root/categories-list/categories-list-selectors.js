import { createSelector, createStructuredSelector } from 'reselect';
// import groupBy from 'lodash/groupBy';

const selectDatasets = ({ datasets = {} }) => datasets.data;
const selectDatasetsLoading = ({ datasets = {} }) => datasets.loading;
const selectCategories = ({ categories = {} }) => categories.data;
const selectCategoriesLoading = ({ categories = {} }) => categories.loading;
const selectQueryParams = ({ location = {} }) => location.query || null;

export const getDatasetActives = createSelector(
  [selectQueryParams],
  query => (query.activeLayers ? query.activeLayers.split(',') : [])
);

export const getCategoriesLoading = createSelector(
  [selectDatasetsLoading, selectCategoriesLoading],
  (datasetsLoading, categoriesLoading) => datasetsLoading && categoriesLoading
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

export const getDatasetsByCategory = createSelector(
  [getDatasets, selectCategories],
  (datasets, categories) => {
    if (!datasets) return;
    return categories.map(category => {
      const categoryDatasets = datasets.filter(
        d => d.category === category.slug
      );
      return {
        ...category,
        datasets: categoryDatasets
      };
    });
    // return datasets.reduce((acc, dataset) => {
    //   const { category: datasetCategory } = dataset;
    //   const category = categories.find(d => d.slug === datasetCategory);
    //   if (!dataset) return acc;

    //   const newCategory = !acc[datasetCategory]
    //     ? { ...category, layers: category }
    //     : {
    //       ...acc[datasetCategory],
    //       layers: [...acc[datasetCategory].layers, category]
    //     };
    //   return {
    //     ...acc,
    //     [datasetCategory]: newCategory
    //   };
    // }, {});
  }
);

export const getCategoriesState = createStructuredSelector({
  query: selectQueryParams,
  loading: getCategoriesLoading,
  categories: getDatasetsByCategory
});
