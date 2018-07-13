import { legends } from './layers-data';
import { getLayerConfig } from './layers-utils';
import upperFirst from 'lodash/upperFirst';

function getSpeciesLayers() {
  const speciesNames = [
    'mammals',
    'amphibians',
    'birds',
    'protea',
    'restio',
    'cacti',
    'conifers',
    'turtles',
    'all-taxa'
  ];
  const speciesTypes = ['richness', 'rarity', 'richness_1km', 'rarity_1km'];
  return speciesNames.reduce(
    (acc, name) => ({
      ...acc,
      ...speciesTypes.reduce(
        (acc, type) => ({
          ...acc,
          [`${name}:${type}`]: {
            id: `${name}:${type}`,
            category: ['global, regional'],
            config: getLayerConfig({ type: 'mol', name: `${name}:${type}` }),
            legend: {
              label: `${upperFirst(name)} ${type}`,
              type: 'gradient',
              color: 'rainbow',
              size: 'big',
              group: type,
              ...(legends[`${name}:${type}`] || {})
            }
          }
        }),
        {}
      )
    }),
    {}
  );
}

const layers = {
  'private-reserves': {
    id: 'private-reserves',
    config: {
      name: 'private-reserves',
      opacity: 100,
      url: null,
      type: 'UrlTemplate',
      visible: false
    },
    carto: {
      cartocss: `#layer { polygon-fill: #972a6a; polygon-opacity: 0.7; } #layer::outline { line-width: 1; line-color: #972a6a; line-opacity: 100; }`,
      sql: 'select * from private_nature_reserve'
    },
    legend: legends['private-reserves']
  }
};

export default {
  byId: {
    ...getSpeciesLayers(),
    ...layers
  }
};
