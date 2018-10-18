import { createSelector, createStructuredSelector } from 'reselect';
import {
  selectCellsLoading,
  selectCellsData,
  selectCellsHistogram,
  selectCellsHistogramBreaks
} from 'selectors/cell-detail-selectors';
import { selectQueryParams, getCellId, getTaxa } from 'selectors/location-selectors';
import { getDatasetsByCategory } from 'selectors/categories-selectors';
import sortBy from 'lodash/sortBy';
import snakeCase from 'lodash/snakeCase';

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
  return sortBy(
    Object.keys(data)
  ).map(key => ({ slug: key, label: key === 'all' ? 'all groups' : key }));
});

export const getTaxaSelected = createSelector([ getTaxaOptions, getTaxa ], (taxas, selected) => {
  if (!taxas) return null;
  const selectedTaxa = taxas.find(taxa => taxa.slug === selected);
  return selectedTaxa || taxas[0];
});

export const getCellTaxaDataSelected = createSelector([ getCellData, getTaxaSelected ], (
  data,
  selected
) =>
  {
    if (!data || !selected) return null;
    return data[selected.slug];
  });

function getLayersPercentage(category, data) {
  return {
    ...category,
    datasets: category.datasets.map(d => ({
      ...d,
      layers: d.layers.map(layer => ({
        ...layer,
        percentage: Math.round((data[snakeCase(layer.slug)] || 0) * 100) / 100
      }))
    }))
  };
}

export const getHumanCategory = createSelector([ getCellTaxaDataSelected, getDatasetsByCategory ], (
  data,
  categories
) =>
  {
    if (!data || !categories) return null;
    const category = categories.find(d => d.slug === 'human-activities');
    if (!category) return null;
    // We only want the human pressure layers
    const dataset = category.datasets.find(d => d.slug === 'human-pressure');
    if (dataset) {
      // and show layers as datasets, hack creating a dataset per layer
      category.datasets = dataset.layers.map(layer => ({
        ...dataset,
        id: layer.id,
        active: layer.active,
        name: layer.name,
        slug: layer.slug,
        layers: [ layer ]
      }));
    }
    return getLayersPercentage(category, data);
  });

export const getConservationCategory = createSelector(
  [ getCellTaxaDataSelected, getDatasetsByCategory ],
  (data, categories) => {
    if (!data || !categories) return null;
    const category = categories.find(d => d.slug === 'conservation-areas');
    return category ? getLayersPercentage(category, data) : null;
  }
);

export const getFeaturedCategory = createSelector(
  [ getCellTaxaDataSelected, getDatasetsByCategory ],
  (data, categories) => {
    if (!data || !data.feature_da || !categories) return null;

    const category = categories.find(d => d.slug === data.feature_da.toLowerCase());
    if (!category) return null;
    category.hideProgress = true;
    return getLayersPercentage(category, data);
  }
);

export const getGridCellType = createSelector(getCellId, cellId => {
  if (!cellId) return null;
  if (cellId.includes('--')) return 'marine';
  return 'terrestrial';
});

export const getCategories = createSelector(
  [ getFeaturedCategory, getHumanCategory, getConservationCategory, getGridCellType ],
  (featured, human, conservation, cellType) => {
    if (!human || !conservation || !cellType) return null;
    const notFeatured = cellType === 'terrestrial' ? [ human, conservation ] : [ conservation ];
    return featured ? [ featured, ...notFeatured ] : [ ...notFeatured ];
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

export const getHistogramBreaks = createSelector([ selectCellsHistogramBreaks, getTaxaSelected ], (
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
  [ getCellTaxaDataSelected, getHistogramBreaks ],
  (data, histogramBreaks) => {
    if (!data || !histogramBreaks) return undefined;
    const rarityPosition = getPosition(data.rarity, histogramBreaks.rarity);
    const richnessPosition = getPosition(data.richness, histogramBreaks.richness);
    return {
      ...data,
      rarity: {
        value: data.rarity,
        ranked_rarity: data.ranked_rarity,
        position: rarityPosition,
        status: status[rarityPosition]
      },
      richness: {
        value: data.richness,
        ranked_richness: data.ranked_richness,
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
  categories: getCategories,
  histogram: getTaxaHistogramPercentage,
  taxas: getTaxaOptions,
  taxaSelected: getTaxaSelected,
  cellType: getGridCellType
});
