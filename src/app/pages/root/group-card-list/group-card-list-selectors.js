import { createSelector, createStructuredSelector } from 'reselect';
import { selectDatasetsLoading } from 'selectors/datasets-selectors';
import { selectCategoriesLoading, getDatasetsByCategory } from 'selectors/categories-selectors';

export const getCategoriesLoading = createSelector(
  [ selectDatasetsLoading, selectCategoriesLoading ],
  (datasetsLoading, categoriesLoading) => datasetsLoading && categoriesLoading
);

export const mapStateToProps = createStructuredSelector({
  loading: getCategoriesLoading,
  categories: getDatasetsByCategory
});
