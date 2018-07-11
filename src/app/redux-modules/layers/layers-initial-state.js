import { getLayerConfig } from './layers-utils';
import upperFirst from 'lodash/upperFirst';

const speciesNames = ['mammals', 'amphibians', 'birds', 'protea', 'restio'];
const speciesTypes = ['richness', 'rarity', 'richness_1km', 'rarity_1km'];
const getSpeciesLayers = () =>
  speciesNames.reduce(
    (acc, name) => ({
      ...acc,
      ...speciesTypes.reduce(
        (acc, type) => ({
          ...acc,
          [`${name}:${type}`]: {
            id: `${name}:${type}`,
            category: ['global, regional'],
            config: getLayerConfig({ type: 'mol', name: `${name}:${type}` }),
            active: false,
            legend: {
              type: 'gradient',
              label: upperFirst(name),
              color: 'rainbow',
              size: 'big',
              min: 8, // TO DEFINE WHERE TO GET IT
              max: 49, // TO DEFINE WHERE TO GET IT
              group: type
            }
          }
        }),
        {}
      )
    }),
    {}
  );

export default {
  byId: {
    ...getSpeciesLayers()
  }
};
