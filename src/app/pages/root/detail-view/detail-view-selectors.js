import { createSelector, createStructuredSelector } from 'reselect';

export const getCategoriesLoading = createSelector(
  () => {
  },
  () => true
);

export const mapStateToProps = createStructuredSelector({ loading: getCategoriesLoading });
