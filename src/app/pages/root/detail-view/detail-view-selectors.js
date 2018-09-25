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

export const getTaxaSelected = createSelector([ getTaxaOptions ], taxas => {
  if (!taxas) return null;
  return taxas[0]; // TODO: get from url param the selected value
});

export const getCellTaxaDataSelected = createSelector(
  [ getCellData, getTaxaSelected ],
  (data, selected) => {
    if (!data || !selected) return null;
    return data[selected.slug];
  }
);

export const mapStateToProps = createStructuredSelector({
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellTaxaDataSelected,
  taxas: getTaxaOptions,
  taxaSelected: getTaxaSelected,
});
