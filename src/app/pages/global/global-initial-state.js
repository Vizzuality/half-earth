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

export const speciesSelector = selected => ({
  options: {
    birds: 'Birds',
    mammals: 'Mammals',
    amphibians: 'Amphibians',
    cacti: 'Cacti',
    conifers: 'Conifers'
  },
  selected
})

export const speciesSelections = type => ({
  birds: `birds:${type}`,
  mammals: `mammals:${type}`,
  amphibians: `amphibians:${type}`,
  cacti: `cacti:${type}`,
  conifers: `conifers:${type}`
})

export default {
  whereToProtect: {
    url:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa.json',
    dimensions: [
      {
        key: 'percentSpeciesMeetingTargetProtectedAreaViaAny',
        style: {
          fill: '#8366e4',
          stroke: '#8366e4',
          fillOpacity: 0.18
        }
      }
    ],
    data: []
  },
  protectedAnimals: {
    dimensions: [{ key: 'percent' }],
    data: [
      {
        subject: 'BIRDS',
        percent: 80
      },
      {
        subject: 'MAMMALS',
        percent: 69
      },
      {
        subject: 'AMPHIBIANS',
        percent: 36
      },
      {
        subject: 'CACTI',
        percent: 34
      },
      {
        subject: 'TURTLES',
        percent: 67
      },
      {
        subject: 'CONIFERS',
        percent: 63
      }
    ]
  },
  layers: [
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
    MOLLayer('mammals:richness', 'mammals', 'richness'),
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
  ],
  sections: {
    'global:1': {
      layers: []
    },
    'global:2': {
      layers: [],
      selections: speciesSelections('richness'),
      selectors: {
        birds: speciesSelector('birds')
      }
    },
    'global:3': {
      layers: []
    },
    'global:4': {
      layers: []
    },
    'global:5': {
      layers: []
    }
  },
  legend: {
    'key-biodiversity-areas': {
      type: 'simple',
      label: 'Key Biodiversity Areas',
      color: 'green'
    },
    'road-building': {
      type: 'simple',
      label: 'Roads',
      color: 'red'
    },
    'private-reserves': {
      type: 'simple',
      label: 'Private Reserves',
      color: 'orange'
    },
    'urban-development': {
      type: 'simple',
      label: 'Urban Development',
      color: 'brown'
    },
    'protected-areas': {
      type: 'simple',
      label: 'Protected Areas',
      color: 'violet'
    },
    'pa-scenario': {
      type: 'multiple',
      elements: [
        {
          label: 'Priority regions for conservation',
          color: 'yellow',
          type: 'simple'
        },
        {
          label: 'Regions with >75% current reserve coverage',
          color: 'violet',
          type: 'simple'
        }
      ]
    },
    mammals: {
      type: 'gradient',
      label: 'Mammals',
      color: 'purple',
      min: 1,
      max: 244
    },
    birds: {
      type: 'gradient',
      label: 'Birds',
      color: 'aqua',
      min: 1,
      max: 1020
    },
    amphibians: {
      type: 'gradient',
      label: 'Amphibians',
      color: 'green',
      min: 1,
      max: 180
    },
    cacti: {
      type: 'gradient',
      label: 'Cacti',
      color: 'orange',
      min: 1,
      max: 93
    },
    conifers: {
      type: 'gradient',
      label: 'Conifers',
      color: 'orange2',
      min: 1,
      max: 49
    },
    'all-taxa': {
      type: 'gradient',
      label: 'All Taxa',
      color: 'blue',
      min: 1
    }
  }
}
