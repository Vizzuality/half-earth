import { cartoConfig } from 'app/utils';
import { utils } from 'pages/map';

const { MOLLayer } = utils;
const { MAPBOX_TOKEN } = process.env;

export default [
  {
    name: 'basemap',
    opacity: 100,
    type: 'UrlTemplate',
    keep: true,
    url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
    visible: false
  },

  MOLLayer('mammals:richness', 'mammals', 'richness_1km'),
  MOLLayer('amphibians:richness', 'amphibians', 'richness_1km'),
  MOLLayer('birds:richness', 'birds', 'richness_1km'),
  MOLLayer('protea:richness', 'protea', 'richness_1km'),
  MOLLayer('restio:richness', 'restio', 'richness_1km'),

  MOLLayer('mammals:rarity', 'mammals', 'rarity_1km'),
  // MOLLayer('amphibians:rarity', 'amphibians', 'rarity_1km'),
  MOLLayer('birds:rarity', 'birds', 'rarity_1km'),
  MOLLayer('protea:rarity', 'protea', 'rarity_1km'),
  MOLLayer('restio:rarity', 'restio', 'rarity_1km'),

  MOLLayer('protected-areas', 'existing-network', 'reserve-coverage'),
  {
    name: 'example-protected-areas',
    opacity: 100,
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        polygon-fill: #9538BA;
        polygon-opacity: 0.9;
      }
      #layer::outline {
        line-width: 1;
        line-color: #9538BA;
        line-opacity: 100;
      }`,
      'wdpa_example_reserves'
    ),
    visible: false
  },

  {
    name: 'community-based-conservation-areas',
    opacity: 100,
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        polygon-fill: #611181;
        polygon-opacity: 0.7;
      }
      #layer::outline {
        line-width: 1;
        line-color: #611181;
        line-opacity: 100;
      }`,
      'community_based_kenilworth'
    ),
    visible: false
  },

  {
    name: 'private-reserves',
    opacity: 100,
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        polygon-fill: #972a6a;
        polygon-opacity: 0.7;
      }
      #layer::outline {
        line-width: 1;
        line-color: #972a6a;
        line-opacity: 100;
      }`,
      'private_nature_reserve'
    ),
    visible: false
  },

  MOLLayer('human-pressures', 'esa/1km/80p', 'human-pressures'),

  {
    name: 'conservation-areas',
    opacity: 100,
    url: '',
    visible: false
  }
];
