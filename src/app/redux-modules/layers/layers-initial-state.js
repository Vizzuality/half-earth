import { legends } from './layers-data';
import { getLayerConfig } from './layers-utils';
import upperFirst from 'lodash/upperFirst';
import range from 'lodash/range';

const getPrioritizationLayers = range(14, 51).reduce((acc, step) => {
  const id = `prioritization-of-places-${step}`;
  return {
    ...acc,
    [id]: {
      id,
      config: {
        name: id,
        opacity: 100,
        url: null,
        type: 'UrlTemplate',
        visible: false
      },
      carto: {
        cartocss: `#layer { [zoom >= 1]{ marker-width: 2;} [zoom >= 2]{ marker-width: 3;} [zoom >= 3]{ marker-width: 5;} [zoom >= 4]{ marker-width: 10;} [zoom >= 5]{ marker-width: 20;} [zoom >= 6]{ marker-width: 40;} [zoom >= 7]{ marker-width: 80;} [zoom >= 8]{ marker-width: 160;} [zoom >= 9]{ marker-width: 320;} marker-fill: ramp([cell_prior], (#ff2955, #e2254c, #c02847, #911c34, #93345d, #350a13), quantiles(6)); marker-fill-opacity: ramp([cell_prior], (0.8, 0.7, 0.6, 0.5, 0.4, 0.3), quantiles(6)); marker-allow-overlap: true; marker-line-width: 0; marker-line-color: #FFFFFF; marker-line-opacity: 1; }`,
        sql: `select * from half_earth_priority_centroids where cpr_pr_any <= ${step}`
      },
      legend: {}
    }
  };
});

const createMolLayer = (name, group, type) => ({
  id: name,
  config: getLayerConfig('mol', { name, type, group }),
  legend: {
    type: 'gradient',
    label: `${upperFirst(group)} ${type}`,
    color: 'rainbow',
    size: 'big',
    group: type,
    ...(legends[`${name}:${type}`] || {})
  }
});

const createCartoLayer = (name, sql, cartocss) => ({
  id: name,
  legend: legends[name],
  carto: { sql, cartocss },
  config: {
    name,
    opacity: 100,
    url: null,
    type: 'UrlTemplate',
    visible: false
  }
});

function getSpeciesLayers() {
  const speciesGroups = [
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

  return speciesGroups.reduce(
    (acc, group) => ({
      ...acc,
      ...speciesTypes.reduce(
        (acc, type) => ({
          ...acc,
          [`${group}:${type}`]: createMolLayer(`${group}:${type}`, group, type)
        }),
        {}
      )
    }),
    {}
  );
}

const layers = {
  'south-africa-protected-areas': createCartoLayer(
    'south-africa-protected-areas',
    'select * from wdpa_example_reserves',
    '#layer { polygon-fill: #9538BA; polygon-opacity: 0.9; } #layer::outline { line-width: 1; line-color: #9538BA; line-opacity: 100; }'
  ),
  'community-based-conservation-areas': createCartoLayer(
    'community-based-conservation-areas',
    'select * from community_based_kenilworth',
    '#layer { polygon-fill: #611181; polygon-opacity: 0.7; } #layer::outline { line-width: 1; line-color: #611181; line-opacity: 100; }'
  ),
  'private-reserves': createCartoLayer(
    'private-reserves',
    'select * from private_nature_reserve',
    `#layer { polygon-fill: #972a6a; polygon-opacity: 0.7; } #layer::outline { line-width: 1; line-color: #972a6a; line-opacity: 100; }`
  ),
  'human-pressures': createMolLayer(
    'human-pressures',
    'esa/1km/80p',
    'human-pressures'
  ),
  'protected-areas': createMolLayer(
    'protected-areas',
    'existing-network',
    'reserve-coverage'
  )
};

export default {
  byId: {
    ...getPrioritizationLayers,
    ...getSpeciesLayers(),
    ...layers
  }
};
