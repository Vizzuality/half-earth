import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MOLLayer, speciesSelector, speciesSelections } = utils

const sliderLayers = steps => {
  return steps.map(v =>
    MOLLayer(
      `pa-scenario-${v}`,
      `pa-scenarios/rarity-driven/all-taxa/${v}`,
      'reserve-coverage'
    )
  )
}

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
      },
      {
        key: 'percentProtectedCurrently'
      }
    ],
    data: []
  },
  protectedAnimals: {
    dimensions: [{ key: 'percent' }],
    data: [
      {
        subject: 'BIRDS',
        percent: 80,
        tooltip: [
          {
            value: 9987,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'MAMMALS',
        percent: 69,
        tooltip: [
          {
            value: 4420,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'AMPHIBIANS',
        percent: 36,
        tooltip: [
          {
            value: 6417,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'CACTI',
        percent: 34,
        tooltip: [
          {
            value: 1413,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'TURTLES',
        percent: 67,
        tooltip: [
          {
            value: 289,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'CONIFERS',
        percent: 63,
        tooltip: [
          {
            value: 606,
            label: 'Number of Species',
            color: '#3850d6'
          }
        ]
      }
    ]
  },
  layers: [
    // ...sliderLayers([16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]),
    ...sliderLayers([16, 21, 30, 36, 41, 46, 50]),
    MOLLayer('all-taxa', 'all-taxa', 'richness'),
    MOLLayer('birds', 'birds', 'richness'),
    MOLLayer('mammals', 'mammals', 'richness'),
    MOLLayer('amphibians', 'amphibians', 'richness'),
    MOLLayer('conifers', 'conifers', 'richness'),
    MOLLayer('cacti', 'cacti', 'richness'),
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
      layers: [],
      selections: speciesSelections('richness'),
      selectors: {
        birds: speciesSelector('birds')
      }
    },
    'global:2': {
      layers: []
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
      type: 'simple',
      label: 'Where to Protect',
      color: 'yellow'
    },
    mammals: {
      type: 'gradient',
      label: 'Mammals',
      color: 'purple'
    },
    birds: {
      type: 'gradient',
      label: 'Birds',
      color: 'aqua'
    },
    amphibians: {
      type: 'gradient',
      label: 'Amphibians',
      color: 'green'
    },
    cacti: {
      type: 'gradient',
      label: 'Cacti',
      color: 'orange'
    },
    // TODO: review conifers color
    conifers: {
      type: 'gradient',
      label: 'Conifers',
      color: 'red'
    },
    'all-taxa': {
      type: 'gradient',
      label: 'All Taxa',
      color: 'blue'
    }
  }
}
