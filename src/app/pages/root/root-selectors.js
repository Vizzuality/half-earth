import { createSelector, createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';

export const getSidebarVisibility = createSelector([ selectQueryParams ], query => {
  if (!query) return true;
  return query.sidebar != 'false'; // eslint-disable-line eqeqeq
});

export const mapStateToProps = createStructuredSelector({ showSidebar: getSidebarVisibility });
