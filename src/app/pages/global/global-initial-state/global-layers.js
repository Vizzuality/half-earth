import { utils } from 'pages/map'
import { cartoConfig } from 'utils'

const { MOLLayer } = utils
// const sliderLayers = steps => {
//   return steps.map(v => ({
//     name: `pa-scenario-${v}`,
//     opacity: 100,
//     url: null,
//     type: 'UrlTemplate',
//     carto: cartoConfig(
//       'half-earth',
//       `#layer {
//           [zoom >= 1]{ marker-width: 2;}
//           [zoom >= 2]{ marker-width: 3;}
//           [zoom >= 3]{ marker-width: 5;}
//           [zoom >= 4]{ marker-width: 10;}
//           [zoom >= 5]{ marker-width: 20;}
//           [zoom >= 6]{ marker-width: 40;}
//           [zoom >= 7]{ marker-width: 80;}
//           [zoom >= 8]{ marker-width: 160;}
//           [zoom >= 9]{ marker-width: 320;}

//           marker-fill: ramp([cell_prior], (#ff2955, #e2254c, #c02847, #911c34, #93345d, #350a13), quantiles(6));
//           marker-fill-opacity: ramp([cell_prior], (0.8, 0.7, 0.6, 0.5, 0.4, 0.3), quantiles(6));
//           marker-allow-overlap: true;
//           marker-line-width: 0;
//           marker-line-color: #FFFFFF;
//           marker-line-opacity: 1;
//           }`,
//       'half_earth_priority_centroids'
//     ),
//     visible: false
//   }))
// }
// const sliderLayers = steps => {
//   return steps.map(v =>
//     MOLLayer(
//       `pa-scenario-${v}`,
//       `pa-scenarios/rarity-driven/all-taxa/${v}`,
//       'reserve-coverage'
//     )
//   )
// }

export default [
  // ...sliderLayers([
  //   16,
  //   17,
  //   18,
  //   19,
  //   20,
  //   21,
  //   22,
  //   23,
  //   24,
  //   25,
  //   26,
  //   27,
  //   28,
  //   29,
  //   30,
  //   31,
  //   32,
  //   33,
  //   34,
  //   35,
  //   36,
  //   37,
  //   38,
  //   39,
  //   40,
  //   41,
  //   42,
  //   43,
  //   44,
  //   45,
  //   46,
  //   47,
  //   48,
  //   49,
  //   50
  // ]),

  {
    name: 'prioritization-of-places',
    opacity: 100,
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'half-earth',
      `#layer {
        [zoom >= 1]{ marker-width: 2;}
        [zoom >= 2]{ marker-width: 3;}
        [zoom >= 3]{ marker-width: 5;}
        [zoom >= 4]{ marker-width: 10;}
        [zoom >= 5]{ marker-width: 20;}
        [zoom >= 6]{ marker-width: 40;}
        [zoom >= 7]{ marker-width: 80;}
        [zoom >= 8]{ marker-width: 160;}
        [zoom >= 9]{ marker-width: 320;}
        
        marker-fill: ramp([cell_prior], (#ff2955, #e2254c, #c02847, #911c34, #93345d, #350a13), quantiles(6));
        marker-fill-opacity: ramp([cell_prior], (0.8, 0.7, 0.6, 0.5, 0.4, 0.3), quantiles(6));
        marker-allow-overlap: true;
        marker-line-width: 0;
        marker-line-color: #FFFFFF;
        marker-line-opacity: 1;
        }`,
      'half_earth_priority_centroids'
    ),
    visible: false
  },

  MOLLayer('birds:richness', 'birds', 'richness'),
  MOLLayer('birds:rarity', 'birds', 'rarity'),

  MOLLayer('mammals:richness', 'mammals', 'richness'),
  MOLLayer('mammals:rarity', 'mammals', 'rarity'),

  MOLLayer('amphibians:richness', 'amphibians', 'richness'),
  MOLLayer('amphibians:rarity', 'amphibians', 'rarity'),

  MOLLayer('cacti:richness', 'cacti', 'richness'),
  MOLLayer('cacti:rarity', 'cacti', 'rarity'),

  MOLLayer('conifers:richness', 'conifers', 'richness'),
  MOLLayer('conifers:rarity', 'conifers', 'rarity'),

  MOLLayer('turtles:richness', 'turtles', 'richness'),
  MOLLayer('turtles:rarity', 'turtles', 'rarity'),

  MOLLayer('all-taxa:richness', 'all-taxa', 'richness'),
  MOLLayer('all-taxa:rarity', 'all-taxa', 'rarity'),

  MOLLayer('human-pressures', 'esa/1km/80p', 'human-pressures'),
  MOLLayer('protected-areas', 'existing-network', 'reserve-coverage')
]
