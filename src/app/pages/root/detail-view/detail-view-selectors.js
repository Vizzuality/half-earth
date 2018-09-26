import { createSelector, createStructuredSelector } from 'reselect';
import { selectCellsLoading, selectCellsData } from 'selectors/cell-detail-selectors';
import { selectQueryParams, getCellId, getTaxa } from 'selectors/location-selectors';
import sortBy from 'lodash/sortBy';

export const getCellData = createSelector([ getCellId, selectCellsData ], (cellId, cellsData) => {
  if (!cellId || !cellsData) return null;
  return cellsData[cellId];
});

export const getTaxaOptions = createSelector([ getCellData ], data => {
  if (!data) return [];
  return sortBy(Object.keys(data)).map(key => ({ slug: key, label: key }));
});

export const getTaxaSelected = createSelector([ getTaxaOptions, getTaxa ], (taxas, selected) => {
  if (!taxas) return null;
  return selected ? taxas.find(taxa => taxa.slug === selected) : taxas[0];
});

export const getCellTaxaDataSelected = createSelector([ getCellData, getTaxaSelected ], (
  data,
  selected
) =>
  {
    if (!data || !selected) return null;
    return data[selected.slug];
  });

export const mapStateToProps = createStructuredSelector({
  query: selectQueryParams,
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellTaxaDataSelected,
  taxas: getTaxaOptions,
  taxaSelected: getTaxaSelected
});
