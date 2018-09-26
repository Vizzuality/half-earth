import { createSelector, createStructuredSelector } from 'reselect';
import {
  selectCellsLoading,
  selectCellsData,
  selectCellsHistogram
} from 'selectors/cell-detail-selectors';
import { selectQueryParams, getCellId, getTaxa } from 'selectors/location-selectors';
import { getDatasetsByCategory } from 'selectors/categories-selectors';
import sortBy from 'lodash/sortBy';

const status = [ 'very low', 'low', 'average', 'high', 'very high' ];

function getPosition(data, values) {
  const position = sortBy(values).reduce((acc, next) => data > next ? acc + 1 : acc, 0);
  return position;
}

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

export const getHumanLayers = createSelector([ getCellTaxaDataSelected, getDatasetsByCategory ], (
  data,
  categories
) =>
  {
    if (!data || !categories) return null;
    const category = categories.find(d => d.slug === 'human-activities');

    if (!category) return null;
    return category.datasets.map(d => ({
      ...d,
      percentage: data[d.slug.replace('protected-', '')]
    }));
  });

export const getConservationLayers = createSelector(
  [ getCellTaxaDataSelected, getDatasetsByCategory ],
  (data, categories) => {
    if (!data || !categories) return null;
    const category = categories.find(d => d.slug === 'conservation-areas');

    if (!category) return null;
    return category.datasets.map(d => ({
      ...d,
      percentage: data[d.slug.replace('protected-', '')]
    }));
  }
);

export const getTaxaHistogram = createSelector([ selectCellsHistogram, getTaxaSelected ], (
  data,
  selected
) =>
  {
    if (!data || !selected) return null;
    return { rarity: data.rarity[selected.slug], richness: data.richness[selected.slug] };
  });

export const getTaxaHistogramPercentage = createSelector([ getTaxaHistogram ], data => {
  if (!data) return null;
  const totalRarity = data.rarity.reduce((acc, next) => acc + next, 0);
  const totalRichness = data.richness.reduce((acc, next) => acc + next, 0);

  return {
    rarity: data.rarity.map(h => h * 100 / totalRarity),
    richness: data.richness.map(h => h * 100 / totalRichness)
  };
});

export const getCellTaxaDataSelectedParsed = createSelector(
  [ getCellTaxaDataSelected, getTaxaHistogram ],
  (data, histogram) => {
    if (!data || !histogram) return undefined;
    const rarityPosition = getPosition(data.rarity, histogram.rarity);
    const richnessPosition = getPosition(data.richness, histogram.richness);
    return {
      ...data,
      rarity: { value: data.rarity, position: rarityPosition, status: status[rarityPosition] },
      richness: {
        value: data.richness,
        position: richnessPosition,
        status: status[richnessPosition]
      }
    };
  }
);

export const mapStateToProps = createStructuredSelector({
  query: selectQueryParams,
  cellId: getCellId,
  loading: selectCellsLoading,
  data: getCellTaxaDataSelectedParsed,
  conservationLayers: getConservationLayers,
  humanLayers: getHumanLayers,
  histogram: getTaxaHistogramPercentage,
  taxas: getTaxaOptions,
  taxaSelected: getTaxaSelected
});
