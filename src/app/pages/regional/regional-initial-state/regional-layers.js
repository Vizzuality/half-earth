import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MAPBOX_TOKEN, MOLLayer } = utils

export default [
  {
    name: 'basemap',
    type: 'UrlTemplate',
    keep: true,
    url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
    visible: false
  },
  {
    name: 'dark:basemap',
    type: 'UrlTemplate',
    keep: true,
    url: `https://api.mapbox.com/styles/v1/jchalfearth/cj82yobfla1uq2ss6vlwaidgy/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
    visible: false
  },

  MOLLayer('mammals:richness', 'mammals', 'richness_1km'),
  MOLLayer('amphibians:richness', 'amphibians', 'richness_1km'),
  MOLLayer('birds:richness', 'birds', 'richness_1km'),
  MOLLayer('protea:richness', 'protea', 'richness_1km'),
  MOLLayer('restio:richness', 'restio', 'richness_1km'),

  MOLLayer('mammals:rarity', 'mammals', 'rarity_1km'),
  MOLLayer('amphibians:rarity', 'amphibians', 'rarity_1km'),
  MOLLayer('birds:rarity', 'birds', 'rarity_1km'),
  MOLLayer('protea:rarity', 'protea', 'rarity_1km'),
  MOLLayer('restio:rarity', 'restio', 'rarity_1km'),

  {
    name: 'protected-areas',
    url:
      'https://cdn.mol.org/half-earth/tiles/reserve-coverage/existing-network/{z}/{x}/{y}',
    type: 'UrlTemplate',
    visible: false
  },
  {
    name: 'human-pressures',
    url:
      'https://cdn.mol.org/half-earth/tiles/human-pressures/esa/1km/80p/{z}/{x}/{y}',
    type: 'UrlTemplate',
    visible: false
  },
  {
    name: 'conservation-areas',
    url: '',
    visible: false
  },
  {
    name: 'example-protected-areas',
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        polygon-fill: #d96fad;
        polygon-opacity: 0.9;
      }
      #layer::outline {
        line-width: 1;
        line-color: #d96fad;
        line-opacity: 1;
      }`,
      'wdpa_example_reserves'
    ),
    visible: false
  },
  {
    name: 'community-based-conservation-areas',
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
        line-opacity: 1;
      }`,
      'community_based_kenilworth'
    ),
    visible: false
  },
  {
    name: 'private-reserves',
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
        line-opacity: 1;
      }`,
      'private_nature_reserve'
    ),
    visible: false
  },
  {
    name: 'centroid-tests',
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        marker-width: 12.5;
        marker-fill: ramp([cell_prior], (#ff2955, #e2254c, #c02847, #911c34, #93345d, #350a13), quantiles);
        marker-fill-opacity: 1;
        marker-allow-overlap: true;
        marker-line-width: 1;
        marker-line-color: #FFFFFF;
        marker-line-opacity: 1;
      }`,
      'half_earth_priority_centroids'
    ),
    visible: false
  }
]
