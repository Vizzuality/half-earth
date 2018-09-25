import { createSelector } from 'reselect';
import { checkBoolean } from 'utils';

export const selectQueryParams = ({ location = {} }) => location.query;

export const getSidebarVisibility = createSelector([ selectQueryParams ], query => {
  if (!query) return true;
  return checkBoolean(query.sidebar);
});

export const getGridId = createSelector([ selectQueryParams ], query => {
  if (!query) return null;
  return query.gridId;
});

export const getIsTerrain = createSelector([ selectQueryParams ], query => {
  if (!query) return null;
  return checkBoolean(query.terrain);
});
