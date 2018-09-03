import { createSelector } from 'reselect';
import { getDatasets } from 'selectors/datasets-selectors';

export const selectCategories = ({ categories = {} }) => categories.data;
export const selectCategoriesLoading = ({ categories = {} }) =>
  categories.loading;

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
  }
);
