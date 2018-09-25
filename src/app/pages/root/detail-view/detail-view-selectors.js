import { createSelector, createStructuredSelector } from 'reselect';
import { selectCellsLoading, selectCellsData } from 'selectors/cell-detail-selectors';
import { getCellId } from 'selectors/location-selectors';
import sortBy from 'lodash/sortBy';

export const getCellData = createSelector([ getCellId, selectCellsData ], (cellId, cellsData) => {
  if (!cellId || !cellsData) return null;
  return cellsData[cellId];
});

export const getTaxaOptions = createSelector([ getCellData ], data => {
  if (!data) return [];
  return sortBy(Object.keys(data)).map(key => ({ slug: key, label: key }));
});

export const mapStateToProps = createStructuredSelector({
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellData,
  taxas: getTaxaOptions
});
