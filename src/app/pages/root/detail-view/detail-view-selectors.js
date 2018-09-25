import { createSelector, createStructuredSelector } from 'reselect';
import { selectCellsLoading, selectCellsData } from 'selectors/cell-detail-selectors';
import { getCellId } from 'selectors/location-selectors';

export const getCellData = createSelector([ getCellId, selectCellsData ], (cellId, cellsData) => {
  if (!cellId || !cellsData) return null;
  return cellsData[cellId];
});

export const mapStateToProps = createStructuredSelector({
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellData
});
