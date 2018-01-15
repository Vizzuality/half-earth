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
