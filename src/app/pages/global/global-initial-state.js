import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MOLLayer, speciesSelector, speciesSelections } = utils

const sliderLayers = steps => {
  return steps.map(v =>
    MOLLayer(`pa-scenario-${v}`, `pa-scenario/${v}/all-taxa`, 'richness')
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
    dimensions: [{ key: 'total' }],
    data: [
      { subject: 'BIRDS', total: 80, fullMark: 150 },
      { subject: 'MAMMALS', total: 69, fullMark: 150 },
      { subject: 'AMPHIBIANS', total: 36, fullMark: 150 },
      { subject: 'CACTI', total: 34, fullMark: 150 },
      { subject: 'TURTLES', total: 67, fullMark: 150 },
      { subject: 'CONIFERS', total: 63, fullMark: 150 }
    ]
  },
  layers: [
    ...sliderLayers([20, 25, 30, 35, 40, 45, 50]),
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
      color: 'pink'
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
