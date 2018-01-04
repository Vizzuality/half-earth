import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MOLLayer } = utils
const sliderLayers = steps => {
  return steps.map(v =>
    MOLLayer(
      `pa-scenario-${v}`,
      `pa-scenarios/rarity-driven/all-taxa/${v}`,
      'reserve-coverage'
    )
  )
}

export default [
  ...sliderLayers([
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50
  ]),
  MOLLayer('all-taxa', 'all-taxa', 'richness'),
  MOLLayer('birds:richness', 'birds', 'richness'),
  MOLLayer('birds:rarity', 'birds', 'rarity'),
  MOLLayer('mammals:richness', 'mammals', 'richness'),
  MOLLayer('mammals:rarity', 'mammals', 'rarity'),
  MOLLayer('amphibians:richness', 'amphibians', 'richness'),
  MOLLayer('conifers:richness', 'conifers', 'richness'),
  MOLLayer('cacti:richness', 'cacti', 'richness'),
  {
    name: 'protected-areas',
    url:
      'https://cdn.mol.org/half-earth/tiles/reserve-coverage/existing-network/{z}/{x}/{y}',
    type: 'UrlTemplate',
    visible: false
  },
  {
    name: 'key-biodiversity-areas',
    url: null,
    type: 'UrlTemplate',
    carto: cartoConfig(
      'simbiotica',
      `#layer {
          polygon-fill: #38c0b4;
          polygon-opacity: 0.7;
        }
        #layer::outline {
          line-width: 1;
          line-color: #38c0b4;
          line-opacity: 0.5;
        }`,
      'kba_poly_2016_id'
    ),
    visible: false
  }
]
