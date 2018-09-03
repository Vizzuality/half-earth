import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';
import { selectDatasetsLoading } from 'selectors/datasets-selectors';
import {
  selectCategoriesLoading,
  getDatasetsByCategory
} from 'selectors/categories-selectors';

export const getCategoriesLoading = createSelector(
  [selectDatasetsLoading, selectCategoriesLoading],
  (datasetsLoading, categoriesLoading) => datasetsLoading && categoriesLoading
);

export const getCategoriesState = createStructuredSelector({
  query: selectQueryParams,
  loading: getCategoriesLoading,
  categories: getDatasetsByCategory
});
