import { createSelector, createStructuredSelector } from 'reselect';
import {
  selectCellsLoading,
  selectCellsData,
  selectCellsHistogram
} from 'selectors/cell-detail-selectors';
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

export const getConservationLayers = createSelector([ getCellTaxaDataSelected ], data => {
  if (!data) return null;
  return [ { label: 'Conservation layer 1', value: 45, slug: 'cnv1' } ];
});

export const getHumanLayers = createSelector([ getCellTaxaDataSelected ], data => {
  if (!data) return null;
  return [ { label: 'Human layer 1', value: 20, slug: 'cnv3' } ];
});

export const getTaxaHistogram = createSelector([ selectCellsHistogram, getTaxaSelected ], (
  data,
  selected
) =>
  {
    if (!data || !selected) return null;
    const histogram = {
      rarity: data.rarity[selected.slug],
      richness: data.richness[selected.slug]
    };
    const totalValues = {
      rarity: histogram.rarity.reduce((acc, next) => acc + next, 0),
      richness: histogram.richness.reduce((acc, next) => acc + next, 0)
    };
    return {
      rarity: histogram.rarity.map(h => h * 100 / totalValues.rarity),
      richness: histogram.richness.map(h => h * 100 / totalValues.richness)
    };
  });

export const mapStateToProps = createStructuredSelector({
  query: selectQueryParams,
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellTaxaDataSelected,
  conservationLayers: getConservationLayers,
  humanLayers: getHumanLayers,
  histogram: getTaxaHistogram,
  taxas: getTaxaOptions,
  taxaSelected: getTaxaSelected
});
