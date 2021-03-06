import { createSelector } from 'reselect';
import { checkBoolean } from 'utils';

export const selectQueryParams = ({ location = {} }) => location.query;

export const getSidebarVisibility = createSelector([ selectQueryParams ], query => {
  if (!query) return true;
  return checkBoolean(query.sidebar);
});

export const getCellId = createSelector([ selectQueryParams ], query => {
  if (!query) return null;
  return query.cellId;
});

export const getTaxa = createSelector([ selectQueryParams ], query => {
  if (!query) return null;
  return query.taxa;
});

export const getIsTerrain = createSelector([ selectQueryParams ], query => {
  if (!query) return false;
  return checkBoolean(query.terrain);
});
